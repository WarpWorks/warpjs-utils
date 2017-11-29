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

module.exports = {
    byPositionThenName,
    cache,
    compareIDs,
    constants,
    createResource,
    documentReady: ($) => documentReady($),
    getCurrentPageHAL,
    getHandlebarsHelpersDir,
    getHandlebarsPartialsDir,
    getHandlebarsViewsDir,
    proxy,
    requirePartial,
    sendError,
    sendHal,
    sendIndex,
    trace,
    urlFormat,
    WarpJSError,
    wrapWith406
};
