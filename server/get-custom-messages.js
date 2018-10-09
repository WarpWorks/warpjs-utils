const cloneDeep = require('lodash/cloneDeep');
const extend = require('lodash/extend');

const { CACHE_EXPIRY } = require('./constants');
const getAdminConfigRelationship = require('./get-admin-config-relationship');

const cache = {};

module.exports = async (persistence, config, domain, keys) => {
    if (!cache || !cache[domain.name] || !cache[domain.name].expiry || cache[domain.name].expiry < Date.now()) {
        const relationship = await getAdminConfigRelationship(persistence, config, domain, 'CustomMessage');
        const docs = await relationship.getTargetEntity().getDocuments(persistence).reduce((docs, doc) => extend(docs, { [doc.Name]: doc.Message }), {});
        cache[domain.name] = {
            docs,
            expiry: Date.now() + CACHE_EXPIRY
        };
    }

    const cached = cache[domain.name].docs;

    if (keys) {
        return keys.reduce((docs, key) => extend(docs, { [key]: cached[key] }), {});
    } else {
        return cloneDeep(cached);
    }
};
