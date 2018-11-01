const bundleMapping = require('./bundle-mapping');
const cache = require('./cache');
const constants = require('./constants');
const createResource = require('./create-resource');

module.exports = (req, res, RoutesInfo, title, bundles, cssFile) => {
    if (typeof bundles === 'string') {
        bundles = ['vendor', bundles].map((bundle) => bundleMapping(res, bundle));
    } else {
        bundles = bundles.map((bundle) => bundleMapping(res, bundle));
    }

    const resource = createResource('', {
        copyrightYear: (new Date()).getFullYear(),
        title,
        bundles,
        cssFile,
        baseUrl: res.app.get('base-url'),
        staticUrl: res.app.get('static-url'),
        warpjsUser: req.warpjsUser || null,
        coreUrl: RoutesInfo.expand('W2:app:core', {})
    });

    if (cache && cache.config && cache.config.analytics && cache.config.analytics.apiKey) {
        resource.analyticsApi = cache.config.analytics.apiKey;
    }

    // warpjs-utils' assets.
    resource.link('warpjsUtilsCss', constants.assets.portal.css);
    resource.link('warpjsUtilsJs', constants.assets.portal.js);
    resource.link('topBanner', '/public/logos/public-beta.svg'); // FIXME: Static URL.

    const feedbackUrl = RoutesInfo.expand('W2:portal:feedback', {});
    if (feedbackUrl) {
        resource.link('feedback', feedbackUrl);
    }

    res.status(200).render('index', resource.toJSON());
};
