const hal = require('hal');

const fullUrl = require('./full-url');

module.exports = (reqOrPath, data, req) => {
    const newPath = (typeof reqOrPath === 'string')
        ? (reqOrPath || null)
        : (reqOrPath && reqOrPath.originalUrl)
            ? reqOrPath.originalUrl
            : null
    ;

    if (req) {
        const newUrl = fullUrl(req, newPath);
        return new hal.Resource(data, newUrl);
    } else {
        return new hal.Resource(data, newPath);
    }
};
