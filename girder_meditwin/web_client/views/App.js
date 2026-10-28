const App = girder.views.App;
const events = girder.events;
const router = girder.router;
const eventStream = girder.utilities.eventStream;
const { getCurrentUser } = girder.auth;
const { wrap } = girder.utilities.PluginUtils;

export const BRAND_NAME = 'Twin scd STEMI';
export const BANNER_COLOR = '#db0a0a';
const FAVICON_URL = '/plugin_static/meditwin/img/Meditwin_Favicon.png';

function applyPageBranding() {
    document.title = BRAND_NAME;
    document.querySelectorAll('link[rel~="icon"]').forEach((link) => link.remove());
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.type = 'image/png';
    icon.href = FAVICON_URL;
    document.head.appendChild(icon);
}

// Girder 5 sets document.title to the brand name right after the app renders.
events.on('g:appload.after', applyPageBranding);

// Force the branding (Girder 5 admin UI no longer edits these in the browser).
wrap(App, 'initialize', function (initialize, settings) {
    settings = settings || {};
    settings.brandName = BRAND_NAME;
    settings.bannerColor = BANNER_COLOR;
    initialize.call(this, settings);
});

wrap(App, 'login', function () {
    if (getCurrentUser()) {
        eventStream.open();
        window.location.reload();
    } else {
        router.navigate('/', { trigger: true });
    }
});
