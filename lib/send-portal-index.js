const sendIndex = require('./send-index');

module.exports = (req, res, RoutesInfo, title, bundles, cssFile, meta) => {
    sendIndex(req, res, RoutesInfo, title, bundles, cssFile, 'portal-index', meta);
};
