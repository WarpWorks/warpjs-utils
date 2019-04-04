const constants = require('./constants');
const populateResource = require('./populate-resource');

module.exports = (req, res, resource, RoutesInfo, status) => {
    populateResource(req, resource, RoutesInfo);

    res.status(status || 200)
        .header('Content-Type', constants.HAL_CONTENT_TYPE)
        .send(resource.toJSON());
};
