"""
DICOM metadata extraction and search, ported from girder-dicom-viewer 3.2.18
(which only ships a Girder 3 web client).

Items keep the same ``dicom`` field layout as the Girder 3 plugin, so items
processed under Girder 3 display without being parsed again.
"""
import datetime
import json

import pydicom
import pydicom.multival
import pydicom.sequence
import pydicom.valuerep

from girder import events
from girder.api import access
from girder.api.describe import Description, autoDescribeRoute
from girder.api.rest import Resource
from girder.constants import AccessType, TokenScope
from girder.exceptions import RestException
from girder.models.file import File
from girder.models.item import Item
from girder.utility import search


def load(info):
    Item().exposeFields(level=AccessType.READ, fields={'dicom'})
    events.bind('data.process', 'meditwin_dicom', _uploadHandler)
    search.addSearchMode('dicom', dicomSubstringSearchHandler)

    dicomItem = DicomItem()
    info['apiRoot'].item.route('POST', (':id', 'parseDicom'), dicomItem.makeDicomItem)


class DicomItem(Resource):

    @access.user(scope=TokenScope.DATA_READ)
    @autoDescribeRoute(
        Description('Get and store common DICOM metadata, if any, for all files in the item.')
        .modelParam('id', 'The item ID',
                    model='item', level=AccessType.WRITE, paramType='path')
        .errorResponse('ID was invalid.')
        .errorResponse('Read permission denied on the item.', 403)
    )
    def makeDicomItem(self, item):
        metadataReference = None
        dicomFiles = []

        for file in Item().childFiles(item):
            dicomMeta = _parseFile(file)
            if dicomMeta is None:
                continue
            dicomFiles.append(_extractFileData(file, dicomMeta))

            metadataReference = (
                dicomMeta
                if metadataReference is None else
                _removeUniqueMetadata(metadataReference, dicomMeta)
            )

        if dicomFiles:
            dicomFiles.sort(key=_getDicomFileSortKey)
            item['dicom'] = {
                'meta': metadataReference,
                'files': dicomFiles
            }
            Item().save(item)


def _extractFileData(file, dicomMetadata):
    return {
        'dicom': {
            'SeriesNumber': dicomMetadata.get('SeriesNumber'),
            'InstanceNumber': dicomMetadata.get('InstanceNumber'),
            'SliceLocation': dicomMetadata.get('SliceLocation')
        },
        'name': file['name'],
        '_id': file['_id']
    }


def _getDicomFileSortKey(f):
    meta = f.get('dicom')
    return (
        meta.get('SeriesNumber'),
        meta.get('InstanceNumber'),
        meta.get('SliceLocation'),
        f.get('name')
    )


def _removeUniqueMetadata(dicomMeta, additionalMeta):
    """
    Return only the data common to both inputs. Lists are compared as tuples
    so every value must be hashable.
    """
    return dict(
        {(k, tuple(v) if isinstance(v, list) else v) for k, v in dicomMeta.items()}
        & {(k, tuple(v) if isinstance(v, list) else v) for k, v in additionalMeta.items()}
    )


def _coerceValue(value):
    # Binary data that is not valid utf-8 cannot be stored by MongoDB.
    if isinstance(value, bytes):
        if b'\x00' in value:
            raise ValueError('Binary data with null')
        try:
            value.decode('utf-8')
        except UnicodeDecodeError:
            raise ValueError('Binary data that cannot be stored as utf-8')
    # pydicom value types subclass base types; cast back so MongoDB can serialize them.
    for knownBaseType in {
        int,
        float,
        bytes,
        str,
        datetime.datetime,
        datetime.date,
        datetime.time,
    }:
        if isinstance(value, knownBaseType):
            return knownBaseType(value)

    if isinstance(value, pydicom.valuerep.PersonName):
        return value.encode('utf-8')

    if isinstance(value, pydicom.multival.MultiValue):
        if isinstance(value, pydicom.sequence.Sequence):
            raise ValueError('Cannot coerce a Sequence')
        return list(map(_coerceValue, value))

    raise ValueError('Unknown type', type(value))


def _coerceMetadata(dataset):
    metadata = {}

    # Iterate manually (not dataset.iterall) to skip Sequences and tolerate
    # errors from deferred data loading.
    for tag in dataset.keys():
        try:
            dataElement = dataset[tag]
        except OSError:
            continue
        if dataElement.tag.element == 0:
            # Group Length tags
            continue

        tagKey = dataElement.keyword \
            if dataElement.keyword and not dataElement.tag.is_private else \
            str(dataElement.tag)

        try:
            tagValue = _coerceValue(dataElement.value)
        except ValueError:
            continue

        metadata[tagKey] = tagValue

    return metadata


def _parseFile(f):
    try:
        with File().open(f) as fp:
            dataset = pydicom.dcmread(
                fp,
                defer_size=1024,
                stop_before_pixels=True)
            return _coerceMetadata(dataset)
    except pydicom.errors.InvalidDicomError:
        return None


def _uploadHandler(event):
    """
    When a file is uploaded to a DICOM item, drop any metadata that is no
    longer common to all of the item's DICOM files.
    """
    file = event.info['file']
    fileMetadata = _parseFile(file)
    if fileMetadata is None:
        return
    item = Item().load(file['itemId'], force=True)
    if 'dicom' in item:
        item['dicom']['meta'] = _removeUniqueMetadata(item['dicom']['meta'], fileMetadata)
    else:
        item['dicom'] = {
            'meta': fileMetadata,
            'files': []
        }
    item['dicom']['files'].append(_extractFileData(file, fileMetadata))
    item['dicom']['files'].sort(key=_getDicomFileSortKey)
    Item().save(item)
    events.trigger('dicom_viewer.upload.success')


def dicomSubstringSearchHandler(query, types, user=None, level=None, limit=0, offset=0):
    """
    Substring search on both keys and values of the common DICOM metadata.
    """
    if types != ['item']:
        raise RestException('The dicom search is only able to search in Item.')
    if not isinstance(query, str):
        raise RestException('The search query must be a string.')

    jsQuery = """
        function() {
            var queryKey = %(query)s.toLowerCase();
            var queryValue = queryKey;
            var dicomMeta = obj.dicom.meta;
            return Object.keys(dicomMeta).some(
                function(key) {
                    return (key.toLowerCase().indexOf(queryKey) !== -1)  ||
                        dicomMeta[key].toString().toLowerCase().indexOf(queryValue) !== -1;
                })
            }
    """ % {
        'query': json.dumps(query)
    }

    cursor = Item().find({'dicom': {'$exists': True}, '$where': jsQuery})
    return {
        'item': [
            Item().filter(doc, user)
            for doc in Item().filterResultsByPermission(cursor, user, level, limit, offset)
        ]
    }
