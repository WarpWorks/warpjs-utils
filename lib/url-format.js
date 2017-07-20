const url = require('url');

module.exports = (pathname, query) => url.format({
    pathname,
    query
});
