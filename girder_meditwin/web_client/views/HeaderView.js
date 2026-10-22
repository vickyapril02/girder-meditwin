import { BRAND_NAME, BANNER_COLOR } from './App';

const HeaderView = girder.views.layout.HeaderView;
const { wrap } = girder.utilities.PluginUtils;

wrap(HeaderView, 'initialize', function (initialize, settings) {
    settings = settings || {};
    settings.brandName = BRAND_NAME;
    settings.bannerColor = BANNER_COLOR;
    initialize.call(this, settings);
});
