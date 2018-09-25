const Promise = require('bluebird');

const bodyTemplate = require('./template.hbs');

const MODAL_NAME = 'portal-feedback';
const MODAL_SELECTOR = `[data-warpjs-modal="${MODAL_NAME}"]`;

module.exports = ($) => {
    // Open modal when click on "Feedback" button on right side.
    $(document).on('click', '#warpjs-feedback-button', function() {
        const modal = window.WarpJS.modal($, MODAL_NAME, 'Feedback', [
            { label: "Save", btnClass: 'primary', action: 'save', disabled: true },
            { label: "Close" }
        ]);

        $('> .modal-dialog > .modal-content > .modal-body', modal).html(bodyTemplate({
            href: $(this).data('warpjsUrl')
        }));

        modal.modal('show');
    });

    // Enable text box and "Save" when a selection is made.
    $(document).on('change', `${MODAL_SELECTOR} input[name="choice"]`, function() {
        $(this).closest('form').find('[name="text"]').prop('disabled', false).focus();
        $(`${MODAL_SELECTOR} button[data-warpjs-action="save"]`).prop('disabled', false);
    });

    $(document).on('click', `${MODAL_SELECTOR} .modal-footer [data-warpjs-action="save"]`, function() {
        const form = $(`${MODAL_SELECTOR} .modal-body form`);

        const url = $(this).closest(MODAL_SELECTOR).find('form[action]').attr('action');

        const data = {
            choice: $('input[name="choice"]:checked', form).val(),
            text: $('[name="text"]', form).val(),
            href: document.location.href
        };

        return Promise.resolve()
            .then(() => window.WarpJS.toast.loading($, "Saving feedback..."))
            .then((loadingToast) => Promise.resolve()
                .then(() => window.WarpJS.proxy.post($, url, data))
                .then(() => $(MODAL_SELECTOR).modal('hide'))
                .then(() => window.WarpJS.toast.success($, "Thank you for your feedback.", "Feedback"))
                .catch((err) => window.WarpJS.toast.error($, `Something wrong: ${err.message}`, "Feedback error"))
                .finally(() => window.WarpJS.toast.close($, loadingToast))
            )
        ;
    });
};
