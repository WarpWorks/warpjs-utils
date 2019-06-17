const path = require('path');

const byName = require('./lib/by-name');
const byPositionThenName = require('./lib/by-position-then-name');
const cache = require('./lib/cache');
const compareIDs = require('./lib/compare-ids');
const configureHandlebarsApp = require('./handlebars/configure');
const constants = require('./lib/constants');
const createResource = require('./lib/create-resource');
const docLevel = require('./lib/doc-level');
const documentReady = require('./lib/document-ready');
const expandUrlTemplate = require('./lib/expand-url-template');
const flattenHAL = require('./lib/flatten-hal');
const fullUrl = require('./lib/full-url');
const getCurrentPageHAL = require('./lib/get-current-page-hal');
const getHandlebarsHelpersDir = require('./lib/get-handlebars-helpers-dir');
const getHandlebarsPartialsDir = require('./lib/get-handlebars-partials-dir');
const getHandlebarsViewsDir = require('./lib/get-handlebars-views-dir');
const getInitialData = require('./lib/get-initial-data');
const output = require('./lib/output');
const proxy = require('./lib/proxy');
const requirePartial = require('./lib/require-partial');
const sendError = require('./lib/send-error');
const sendErrorHal = require('./lib/send-error-hal');
const sendHal = require('./lib/send-hal');
const sendIndex = require('./lib/send-index');
const sendPortalIndex = require('./lib/send-portal-index');
const server = require('./server');
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

    get stylePath() {
        return path.join(PROJECT_ROOT, 'styles');
    },

    byName: (left, right) => byName(left, right),
    byPositionThenName: (left, right) => byPositionThenName(left, right),
    cache,
    compareIDs: (id1, id2) => compareIDs(id1, id2),
    configureHandlebarsApp: (app) => configureHandlebarsApp(app),
    constants,
    createResource: (reqOrPath, data, req) => createResource(reqOrPath, data, req),

    /** @deprecated */
    docLevel,
    documentReady: ($) => documentReady($),
    expandUrlTemplate: (templated, data) => expandUrlTemplate(templated, data),
    flattenHAL: (hal) => flattenHAL(hal),
    fullUrl: (req, newPath) => fullUrl(req, newPath),
    getCurrentPageHAL: ($, url) => getCurrentPageHAL($, url),
    getHandlebarsHelpersDir: () => getHandlebarsHelpersDir(),
    getHandlebarsPartialsDir: () => getHandlebarsPartialsDir(),
    getHandlebarsViewsDir: () => getHandlebarsViewsDir(),
    getInitialData: ($) => getInitialData($),
    output,
    proxy,
    requirePartial: (partialName) => requirePartial(partialName),
    sendError: (req, res, RoutesInfo, err) => sendError(req, res, RoutesInfo, err),
    sendErrorHal: (req, res, resource, err, RoutesInfo, status) => sendErrorHal(req, res, resource, err, RoutesInfo, status),
    sendHal: (req, res, resource, RoutesInfo, status) => sendHal(req, res, resource, RoutesInfo, status),
    sendIndex: (req, res, RoutesInfo, title, bundles, cssFile, indexFilename, meta) => sendIndex(req, res, RoutesInfo, title, bundles, cssFile, indexFilename, meta),
    sendPortalIndex: (req, res, RoutesInfo, title, bundles, cssFile, meta) => sendPortalIndex(req, res, RoutesInfo, title, bundles, cssFile, meta),
    server,
    toast,
    trace: (level, arg1, arg2, arg3, arg4) => trace(level, arg1, arg2, arg3, arg4),
    urlFormat: (pathname, query) => urlFormat(pathname, query),
    WarpJSError,
    wrapWith406: (res, formats) => wrapWith406(res, formats)
};
