const path = require('path');

const byPositionThenName = require('./lib/by-position-then-name');
const cache = require('./lib/cache');
const compareIDs = require('./lib/compare-ids');
const constants = require('./lib/constants');
const createResource = require('./lib/create-resource');
const DocLevel = require('./lib/doc-level');
const docLevelUtils = require('./lib/doc-level-utils');
const documentReady = require('./lib/document-ready');
const getCurrentPageHAL = require('./lib/get-current-page-hal');
const getHandlebarsHelpersDir = require('./lib/get-handlebars-helpers-dir');
const getHandlebarsPartialsDir = require('./lib/get-handlebars-partials-dir');
const getHandlebarsViewsDir = require('./lib/get-handlebars-views-dir');
const getInitialData = require('./lib/get-initial-data');
const proxy = require('./lib/proxy');
const requirePartial = require('./lib/require-partial');
const sendError = require('./lib/send-error');
const sendHal = require('./lib/send-hal');
const sendIndex = require('./lib/send-index');
const toast = require('./lib/toast');
const trace = require('./lib/trace');
const urlFormat = require('./lib/url-format');
const WarpJSError = require('./lib/error');
const wrapWith406 = require('./lib/wrap-with-406');

const PROJECT_ROOT = path.dirname(require.resolve('./package.json'));

module.exports = {
    get assetsFolder() {
        return path.join(PROJECT_ROOT, 'assets');
    },

    byPositionThenName: (left, right) => byPositionThenName(left, right),
    cache,
    compareIDs: (id1, id2) => compareIDs(id1, id2),
    constants,
    createResource: (reqOrPath, data) => createResource(reqOrPath, data),
    DocLevel,
    docLevel: docLevelUtils,
    documentReady: ($) => documentReady($),
    getCurrentPageHAL: ($, url) => getCurrentPageHAL($, url),
    getHandlebarsHelpersDir: () => getHandlebarsHelpersDir(),
    getHandlebarsPartialsDir: () => getHandlebarsPartialsDir(),
    getHandlebarsViewsDir: () => getHandlebarsViewsDir(),
    getInitialData: ($) => getInitialData($),
    proxy,
    requirePartial: (partialName) => requirePartial(partialName),
    sendError: (req, res, RoutesInfo, err) => sendError(req, res, RoutesInfo, err),
    sendHal: (req, res, resource, RoutesInfo, status) => sendHal(req, res, resource, RoutesInfo, status),
    sendIndex: (res, title, bundles, cssFile) => sendIndex(res, title, bundles, cssFile),
    toast,
    trace: (level, arg1, arg2, arg3, arg4) => trace(level, arg1, arg2, arg3, arg4),
    urlFormat: (pathname, query) => urlFormat(pathname, query),
    WarpJSError,
    wrapWith406: (res, formats) => wrapWith406(res, formats)
};
