const shared = require('./../shared.js');

const errorTemplate = require('./../../handlebars/partials/studio-error.hbs');

(($) => $(document).ready(() => {
    shared($);

    window.WarpJS.error = (data) => errorTemplate(data);
}))(jQuery);
