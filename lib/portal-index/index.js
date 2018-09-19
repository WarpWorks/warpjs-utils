const feedback = require('./feedback');
const login = require('./login');
const search = require('./search');

module.exports = ($) => {
    feedback($);
    login($);
    search($);
};
