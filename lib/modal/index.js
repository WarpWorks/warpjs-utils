const template = require('./template.hbs');

module.exports = ($, MODAL_NAME, MODAL_TITLE, footerButtons) => {
    const selector = `[data-warpjs-modal="${MODAL_NAME}"]`;

    let modal = $(selector);
    if (!modal.length) {
        $('body').append(template({ MODAL_NAME, MODAL_TITLE, footerButtons }));
        return $(selector);
    } else {
        if (footerButtons && footerButtons.length) {
            $('> .modal-dialog > .modal-content > .modal-footer button', modal).each((index, element) => {
                if (footerButtons[index] && footerButtons[index].disabled) {
                    $(element).prop('disabled', true);
                }
            });
        }
        return modal;
    }
};
