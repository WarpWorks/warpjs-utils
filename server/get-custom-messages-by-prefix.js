const extend = require('lodash/extend');
const keys = require('lodash/keys');

const getCustomMessages = require('./get-custom-messages');

module.exports = async (persistence, config, domain, prefix) => {
    const docs = await getCustomMessages(persistence, config, domain);

    return keys(docs).filter((key) => key.indexOf(prefix) === 0).reduce((cumulator, key) => extend(cumulator, { [key]: docs[key] }), {});
};
