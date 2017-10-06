const createResource = require('./create-resource');
const sendHal = require('./send-hal');
const WarpJSError = require('./error');

module.exports = (req, res, RoutesInfo, err) => {
    // TODO: Log this.
    let resource;
    console.log("Catch(err)=", err);

    if (err instanceof WarpJSError) {
        resource = createResource(req, {
            message: "WarpJS Error.",
            details: err.message
        });
    } else {
        resource = createResource(req, {
            message: "Unknown error.",
            details: (err && err.message) || "No details"
        });
    }
    sendHal(req, res, resource, RoutesInfo, 500);
};
