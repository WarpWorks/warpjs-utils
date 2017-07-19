module.exports = (res, title, bundle, cssFile) => {
    bundle = (bundle.indexOf('/') === -1) ? `${res.app.get('static-url')}/app/${bundle}.js` : bundle;

    res.status(200).render('index', {
        title,
        bundle,
        cssFile,
        baseUrl: res.app.get('base-url'),
        staticUrl: res.app.get('static-url')
    });
};
