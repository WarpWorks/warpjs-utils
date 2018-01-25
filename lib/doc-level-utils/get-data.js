const models = require('./models');
const tokenize = require('./tokenize');

module.exports = (persistence, entity, instance, docLevel) => {
    return models.entity.getData(persistence, entity, instance, tokenize(docLevel));
};
