const bundleMapping = require('./bundle-mapping');
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

    // warpjs-utils' assets.
    resource.link('warpjsUtilsCss', constants.assets.portal.css);
    resource.link('warpjsUtilsJs', constants.assets.portal.js);
    resource.link('feedback', RoutesInfo.expand('W2:portal:feedback', {}));
    resource.link('topBanner', '/public/logos/public-beta.svg'); // FIXME: Static URL.

    res.status(200).render('index', resource.toJSON());
};
