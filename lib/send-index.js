module.exports = (res, title, bundle, cssFile) => {
    res.status(200).render('index', {
        title,
        bundle,
        cssFile,
        baseUrl: res.app.get('base-url'),
        staticUrl: res.app.get('static-url')
    });
};
