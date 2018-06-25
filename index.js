const path = require('path');

const byPositionThenName = require('./lib/by-position-then-name');
const cache = require('./lib/cache');
const compareIDs = require('./lib/compare-ids');
const constants = require('./lib/constants');
const createResource = require('./lib/create-resource');
const docLevel = require('./lib/doc-level');
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
const canEdit = require('./lib/can-edit');
const documentDoesNotExist = require('./lib/document-does-not-exist');
const getConfig = require('./lib/get-config');
const getDomain = require('./lib/get-domain');
const getEntity = require('./lib/get-entity');
const getPersistence = require('./lib/get-persistence');
const getRootEntity = require('./lib/get-root-entity');

const PROJECT_ROOT = path.dirname(require.resolve('./package.json'));

module.exports = {
    get assetsFolder() {
        return path.join(PROJECT_ROOT, 'assets');
    },
    canEdit: (persistance, entity, instance, user) => canEdit(persistance, entity, instance, user),
    documentDoesNotExist: (req, res) => documentDoesNotExist(req, res),
    getConfig: () => getConfig(),
    getDomain: (domainName) => getDomain(domainName),
    getEntity: (domainName, type) => getEntity(domainName, type),
    getPersistence: (domainName) => getPersistence(domainName),
    getRootEntity: (domainName) => getRootEntity(domainName),
    byPositionThenName: (left, right) => byPositionThenName(left, right),
    cache,
    compareIDs: (id1, id2) => compareIDs(id1, id2),
    constants,
    createResource: (reqOrPath, data) => createResource(reqOrPath, data),
    docLevel,
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
