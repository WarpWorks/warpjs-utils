const output = require('./output');
const sendHal = require('./send-hal');

module.exports = (req, res, resource, err, RoutesInfo, status) => {
    const execution = new Error();
    output.error("Execution stack:", execution.stack);
    output.error("Original error:", err);

    resource.error = true;
    resource.message = err.message;

    sendHal(req, res, resource, RoutesInfo, status || 500);
};
