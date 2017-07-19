const byPositionThenName = require('./lib/by-position-then-name');
const constants = require('./lib/constants');
const createResource = require('./lib/create-resource');
const getCurrentPageHal = require('./lib/get-current-page-hal');
const sendError = require('./lib/send-error');
const sendHal = require('./lib/send-hal');
const sendIndex = require('./lib/send-index');
const WarpJSError = require('./lib/error');
const wrapWith406 = require('./lib/wrap-with-406');

module.exports = {
    byPositionThenName,
    constants,
    createResource,
    getCurrentPageHal,
    sendError,
    sendHal,
    sendIndex,
    WarpJSError,
    wrapWith406
};
