const getCustomMessages = require('./get-custom-messages');

module.exports = async (persistence, config, domain, key) => {
    const doc = await getCustomMessages(persistence, config, domain, [key]).pop();
    return (doc && doc.Message) ? doc.Message : null;
};
