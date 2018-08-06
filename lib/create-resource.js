const hal = require('hal');

module.exports = (reqOrPath, data) => {
    if (typeof reqOrPath === 'string') {
        return new hal.Resource(data, reqOrPath || null);
    }
    return new hal.Resource(data, (reqOrPath && reqOrPath.originalUrl) ? reqOrPath.originalUrl : null);
};
