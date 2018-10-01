const FilterBox = require('@warp-works/warpjs-filter-box');

const byPositionThenName = require('./../lib/by-position-then-name');
const cache = require('./../lib/cache');
const constants = require('./../lib/constants');
const expandUrlTemplate = require('./../lib/expand-url-template');
const getCurrentPageHAL = require('./../lib/get-current-page-hal');
const modal = require('./../lib/modal');
const proxy = require('./../lib/proxy');
const toast = require('./../lib/toast');

module.exports = ($) => {
    if (!window.WarpJS) {
        window.WarpJS = {};
    }

    window.WarpJS.HAL_CONTENT_TYPE = constants.HAL_CONTENT_TYPE;
    window.WarpJS.CONTENT_PLACEHOLDER = constants.CONTENT_PLACEHOLDER;

    window.WarpJS.byPositionThenName = byPositionThenName;
    window.WarpJS.cache = cache;
    window.WarpJS.expandUrlTemplate = expandUrlTemplate;
    window.WarpJS.getCurrentPageHAL = getCurrentPageHAL;
    window.WarpJS.modal = modal;
    window.WarpJS.proxy = proxy;
    window.WarpJS.toast = toast;

    FilterBox.init($);
};
