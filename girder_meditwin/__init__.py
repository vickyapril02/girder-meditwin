from pathlib import Path

from girder.plugin import GirderPlugin, registerPluginStaticContent

from . import dicom


class MeditwinPlugin(GirderPlugin):
    DISPLAY_NAME = 'MediTwin Customizations'

    def load(self, info):
        dicom.load(info)

        registerPluginStaticContent(
            plugin='meditwin',
            css=['/style.css'],
            js=['/girder-plugin-meditwin.umd.cjs'],
            staticDir=Path(__file__).parent / 'web_client' / 'dist',
            tree=info['serverRoot'],
        )
