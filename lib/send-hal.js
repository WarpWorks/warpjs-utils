const constants = require('./constants');

module.exports = (req, res, resource, status) => {
    res.status(status || 200)
        .header('Content-Type', constants.HAL_CONTENT_TYPE)
        .send(resource.toJSON());
};
