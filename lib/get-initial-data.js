/**
 *  This module is like the getCurrentPageHal(), but will make sure to have a
 *  page load toaster and return a promise with proper reject. It also uses the
 *  proxy.
 */
const Promise = require('bluebird');

const proxy = require('./proxy');
const toast = require('./toast');

module.exports = ($) => Promise.resolve()
    .then(() => toast.loading($, "Loading initial data"))
    .then((toastr) => Promise.resolve()
        .then(() => proxy.get($, undefined, true))
        .catch((err) => {
            toast.error($, "Error getting data", "Loading initial data");
            throw err;
        })
        .finally(() => toast.close($, toastr))
    )
;
