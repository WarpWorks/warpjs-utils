// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'babel-regenerator-runtime';

import * as ReactComponents from './react-utils/components';
import * as ReactUtils from './react-utils';

const FilterBox = require('@warp-works/warpjs-filter-box');

const bareModal = require('./bare-modal');
const byPositionThenName = require('./../lib/by-position-then-name');
const cache = require('./../lib/cache');
const constants = require('./../lib/constants');
const expandUrlTemplate = require('./../lib/expand-url-template');
const flattenHAL = require('./../lib/flatten-hal');
const getCurrentPageHAL = require('./../lib/get-current-page-hal');
const modal = require('./../lib/modal');
const proxy = require('./../lib/proxy');
const toast = require('./../lib/toast');

if (!window.WarpJS) {
    window.WarpJS = {};
}

window.WarpJS.HAL_CONTENT_TYPE = constants.HAL_CONTENT_TYPE;
window.WarpJS.CONTENT_PLACEHOLDER = constants.CONTENT_PLACEHOLDER;

window.WarpJS.bareModal = bareModal;
window.WarpJS.byPositionThenName = byPositionThenName;
window.WarpJS.cache = cache;
window.WarpJS.expandUrlTemplate = expandUrlTemplate;
window.WarpJS.flattenHAL = flattenHAL;
window.WarpJS.getCurrentPageHAL = getCurrentPageHAL;
window.WarpJS.modal = modal;
window.WarpJS.proxy = proxy;
window.WarpJS.toast = toast;

window.WarpJS.ReactUtils = ReactUtils;
window.WarpJS.ReactComponents = ReactComponents;

module.exports = ($) => {
    FilterBox.init($);
};
