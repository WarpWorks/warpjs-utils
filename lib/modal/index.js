const template = require('./template.hbs');

module.exports = ($, MODAL_NAME, MODAL_TITLE, footerButtons) => {
    const selector = `[data-warpjs-modal="${MODAL_NAME}"]`;

    const modal = $(selector);
    if (!modal.length) {
        if (typeof MODAL_TITLE !== 'string' && MODAL_TITLE.html) {
            const MODAL_TITLE_HTML = MODAL_TITLE.value;

            $('body').append(template({ MODAL_NAME, MODAL_TITLE_HTML, footerButtons }));
        } else {
            $('body').append(template({ MODAL_NAME, MODAL_TITLE, footerButtons }));
        }
    } else {
        if (footerButtons && footerButtons.length) {
            $('> .modal-dialog > .modal-content > .modal-footer button', modal).each((index, element) => {
                if (footerButtons[index] && footerButtons[index].disabled) {
                    $(element).prop('disabled', true);
                }
            });
        }
    }
    return $(selector);
};
