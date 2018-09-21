const feedback = require('./feedback');
const login = require('./login');
const search = require('./search');
const shared = require('./../shared.js');

const errorTemplate = require('./../../handlebars/partials/error-portal.hbs');

(($) => $(document).ready(() => {
    shared($);

    window.WarpJS.error = (data) => errorTemplate(data);

    feedback($);
    login($);
    search($);
}))(jQuery);
