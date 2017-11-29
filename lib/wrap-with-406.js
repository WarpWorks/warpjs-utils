const _ = require('lodash');

module.exports = (res, formats) => {
    if (formats.default) {
        res.format(formats);
    } else {
        res.format(_.extend({}, formats, {
            default: () => {
                res.status(406).send("Unknown Accept header");
            }
        }));
    }
};
