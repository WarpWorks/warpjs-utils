const getData = require('./get-data');

module.exports = {
    getData: (persistence, entity, instance, docLevel) => getData(persistence, entity, instance, docLevel)
};
