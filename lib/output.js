module.exports = {
    error: function() {
        // eslint-disable-next-line no-console
        console.error.apply(console, Array.prototype.slice.call(arguments));
    },

    info: function() {
        // eslint-disable-next-line no-console
        console.info.apply(console, Array.prototype.slice.call(arguments));
    },

    log: function() {
        // eslint-disable-next-line no-console
        console.log.apply(console, Array.prototype.slice.call(arguments));
    },

    warn: function() {
        // eslint-disable-next-line no-console
        console.warn.apply(console, Array.prototype.slice.call(arguments));
    }
};
