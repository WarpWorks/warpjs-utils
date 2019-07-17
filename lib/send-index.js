const bundleMapping = require('./bundle-mapping');
const constants = require('./constants');
const createResource = require('./create-resource');
const populateResource = require('./populate-resource');

module.exports = (req, res, RoutesInfo, title, bundles, cssFile, indexFilename = 'index', meta) => {
    if (typeof bundles === 'string') {
        bundles = [ 'vendor', bundles ].map((bundle) => bundleMapping(res, bundle));
    } else {
        bundles = bundles.map((bundle) => bundleMapping(res, bundle));
    }

    const resource = createResource('', {
        title,
        bundles,
        cssFile,
        baseUrl: res.app.get('base-url'),
        staticUrl: res.app.get('static-url'),
        coreUrl: RoutesInfo.expand('W2:app:core', {}),
        meta
    });

    populateResource(req, resource, RoutesInfo);

    // warpjs-utils' assets.
    resource.link('warpjsUtilsCss', constants.assets.portal.css);
    resource.link('warpjsUtilsJs', constants.assets.portal.js);

    res.status(200).render(indexFilename, resource.toJSON());
};
