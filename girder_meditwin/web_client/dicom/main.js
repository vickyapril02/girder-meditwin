import DicomItemView from './DicomView';
import ParseDicomItemTemplate from './parseDicomItem.pug';

const ItemView = girder.views.body.ItemView;
const SearchFieldWidget = girder.views.widgets.SearchFieldWidget;
const events = girder.events;
const { getCurrentUser } = girder.auth;
const { AccessType } = girder.constants;
const { restRequest } = girder.rest;
const { wrap } = girder.utilities.PluginUtils;

wrap(ItemView, 'render', function (render) {
    this.once('g:rendered', () => {
        if (this.model.get('_accessLevel') >= AccessType.WRITE) {
            this.$('.g-item-actions-menu').prepend(ParseDicomItemTemplate({
                item: this.model,
                currentUser: getCurrentUser()
            }));
        }

        if (this.model.has('dicom')) {
            new DicomItemView({
                parentView: this,
                item: this.model
            })
                .render()
                .$el.insertAfter(this.$('.g-item-info'));
        }
    });
    return render.call(this);
});

ItemView.prototype.events['click .g-dicom-parse-item'] = function () {
    restRequest({
        method: 'POST',
        url: `item/${this.model.id}/parseDicom`,
        error: null
    })
        .done(() => {
            events.trigger('g:alert', {
                icon: 'ok',
                text: 'Dicom item parsed.',
                type: 'success',
                timeout: 4000
            });
        })
        .fail(() => {
            events.trigger('g:alert', {
                icon: 'cancel',
                text: 'No Dicom metadata.',
                type: 'danger',
                timeout: 4000
            });
        });
};

SearchFieldWidget.addMode(
    'dicom',
    ['item'],
    'DICOM metadata search',
    `You are searching for text in DICOM metadata. Only Girder items which have been preprocessed to
        extract DICOM images will be searched. The search text may appear anywhere within the common (i.e.
        shared across slices) metadata keys or values of a DICOM image.`
);
