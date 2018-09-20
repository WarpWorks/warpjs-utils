const path = require('path');

const constants = require('./../../lib/constants.js');

module.exports = Object.freeze({
    options: {
        compress: true
    },

    portal: {
        dest: path.join(constants.folders.assets, 'css', constants.assets.portal.css),
        src: 'client/portal/style.less'
    }
});
