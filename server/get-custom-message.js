const getAdminConfigRelationship = require('./get-admin-config-relationship');

//  Assuming no duplicates in CustomMessage key.
//
//  Format:
//
//      cache = {
//          [domain.name]: {
//              [key]: {
//                  expiry: millis,
//                  instance: {...}
//              }
//          }
//      };
//
const cache = {};

module.exports = async (persistence, config, domain, key) => {
    cache[domain.name] = cache[domain.name] || {};
    cache[domain.name][key] = cache[domain.name][key] || {};

    const cached = cache[domain.name][key];

    if (cached && cached.expiry && cached.expiry > Date.now()) {
        console.log("hit cache get-custom-message");
        return cached.instance;
    } else {
        const relationship = await getAdminConfigRelationship(persistence, config, domain, 'CustomMessage');
        const doc = await relationship.getTargetEntity().getInstance(persistence, { Name: key });
        cached.instance = doc;
        cached.expiry = Date.now() + 600000; // 10min.
        return doc;
    }
};
