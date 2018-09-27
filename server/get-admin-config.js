//  Assuming the id is pretty much unique, let's use it as the key for the
//  caching. Format:
//
//      cache = {
//          [id]: {
//              expiry: millis,
//              instance: {...}
//          }
//      };
const cache = {};

module.exports = async (persistence, config, domain) => {
    const entity = domain.getEntityByName(config.adminConfig.type);

    cache[config.adminConfig.id] = cache[config.adminConfig.id] || {};

    const cached = cache[config.adminConfig.id];

    if (cached && cached.expiry && cached.expiry > Date.now()) {
        return { entity, instance: cached.instance };
    } else {
        const instance = await entity.getInstance(persistence, config.adminConfig.id);
        cached.instance = instance;
        cached.expiry = Date.now() + 600000; // 10min.
        return { entity, instance };
    }
};
