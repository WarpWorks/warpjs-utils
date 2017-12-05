const byPositionThenName = require('./lib/by-position-then-name');
const cache = require('./lib/cache');
const compareIDs = require('./lib/compare-ids');
const constants = require('./lib/constants');
const createResource = require('./lib/create-resource');
const documentReady = require('./lib/document-ready');
const getCurrentPageHAL = require('./lib/get-current-page-hal');
const getHandlebarsHelpersDir = require('./lib/get-handlebars-helpers-dir');
const getHandlebarsPartialsDir = require('./lib/get-handlebars-partials-dir');
const getHandlebarsViewsDir = require('./lib/get-handlebars-views-dir');
const proxy = require('./lib/proxy');
const requirePartial = require('./lib/require-partial');
const sendError = require('./lib/send-error');
const sendHal = require('./lib/send-hal');
const sendIndex = require('./lib/send-index');
const trace = require('./lib/trace');
const urlFormat = require('./lib/url-format');
const WarpJSError = require('./lib/error');
const wrapWith406 = require('./lib/wrap-with-406');

if (!global.jquery) {
    // Bug in toastr
    global.jquery = require('jquery');
}
const toastr = require('toastr');

module.exports = {
    byPositionThenName: (left, right) => byPositionThenName(left, right),
    cache,
    compareIDs: (id1, id2) => compareIDs(id1, id2),
    constants,
    createResource: (reqOrPath, data) => createResource(reqOrPath, data),
    documentReady: ($) => documentReady($),
    getCurrentPageHAL: ($, url) => getCurrentPageHAL($, url),
    getHandlebarsHelpersDir: () => getHandlebarsHelpersDir(),
    getHandlebarsPartialsDir: () => getHandlebarsPartialsDir(),
    getHandlebarsViewsDir: () => getHandlebarsViewsDir(),
    proxy,
    requirePartial: (partialName) => requirePartial(partialName),
    sendError: (req, res, RoutesInfo, err) => sendError(req, res, RoutesInfo, err),
    sendHal: (req, res, resource, RoutesInfo, status) => sendHal(req, res, resource, RoutesInfo, status),
    sendIndex: (res, title, bundles, cssFile) => sendIndex(res, title, bundles, cssFile),
    toastr,
    trace: (level, arg1, arg2, arg3, arg4) => trace(level, arg1, arg2, arg3, arg4),
    urlFormat: (pathname, query) => urlFormat(pathname, query),
    WarpJSError,
    wrapWith406: (res, formats) => wrapWith406(res, formats)
};
