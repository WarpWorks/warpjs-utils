module.exports = (res, title, bundle) => {
    res.status(200).render('index', {
        title,
        bundle,
        baseUrl: res.app.get('base-url'),
        staticUrl: res.app.get('static-url')
    });
};
