function bundleMapping(res, bundle) {
    return (bundle.indexOf('/') === -1) ? `${res.app.get('static-url')}/app/${bundle}.js` : bundle;
}

module.exports = (res, title, bundles, cssFile) => {
    if (typeof bundles === 'string') {
        bundles = ['vendor', bundles].map((bundle) => bundleMapping(res, bundle));
    } else {
        bundles = bundles.map((bundle) => bundleMapping(res, bundle));
    }

    res.status(200).render('index', {
        title,
        bundles,
        cssFile,
        baseUrl: res.app.get('base-url'),
        staticUrl: res.app.get('static-url')
    });
};
