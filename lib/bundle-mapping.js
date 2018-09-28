module.exports = (res, bundle) => (bundle.indexOf('/') === -1) ? `${res.app.get('static-url')}/app/${bundle}.min.js` : bundle;
