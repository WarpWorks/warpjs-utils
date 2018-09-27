const getAdminConfig = require('./get-admin-config');

module.exports = async (persistence, config, domain, relationshipName) => {
    const adminConfig = await getAdminConfig(persistence, config, domain);
    return adminConfig.entity.getRelationshipByName(relationshipName);
};
