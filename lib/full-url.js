const url = require('url');

module.exports = (req, newPath) => {
    const hostname = req.get('x-forwarded-host') || req.get('host');
    const proto = req.get('x-forwarded-proto') || req.protocol;
    const currentUrl = new url.URL(`${proto}://${hostname}${req.originalUrl}`);

    if (newPath) {
        const newUrl = new url.URL(newPath, currentUrl);
        return newUrl.toString();
    } else {
        return currentUrl.toString();
    }
};
