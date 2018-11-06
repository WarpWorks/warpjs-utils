const template = require('./template.hbs');

module.exports = ($, MODAL_NAME) => {
    const selector = `[data-warpjs-modal="${MODAL_NAME}"]`;
    const modal = $(selector);

    if (modal.length) {
        modal.remove();
    }

    $('body').append(template({ MODAL_NAME }));

    return $(selector);
};
