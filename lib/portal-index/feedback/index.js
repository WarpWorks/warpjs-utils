const Promise = require('bluebird');

const bodyTemplate = require('./template.hbs');
const getModal = require('./../../modal');
const toast = require('./../../toast');

const MODAL_NAME = 'portal-feedback';
const MODAL_SELECTOR = `[data-warpjs-modal="${MODAL_NAME}"]`;

function simulate($, data) {
    const loadingToast = toast.loading($, `choice=${data.choice}; text=${data.text}`, "Simulation");
    return new Promise((resolve) => {
        setTimeout(() => {
            toast.close($, loadingToast);
            resolve();
        }, 3000);
    });
}

module.exports = ($) => {
    // Open modal when click on "Feedback" button on right side.
    $(document).on('click', '#warpjs-feedback-button', function() {
        const modal = getModal($, MODAL_NAME, 'Feedback', [
            { label: "Save", btnClass: 'primary', action: 'save', disabled: true },
            { label: "Close" }
        ]);

        $('> .modal-dialog > .modal-content > .modal-body', modal).html(bodyTemplate({}));

        modal.modal('show');
    });

    // Enable text box and "Save" when a selection is made.
    $(document).on('change', `${MODAL_SELECTOR} input[name="choice"]`, function() {
        $(this).closest('form').find('[name="text"]').prop('disabled', false).focus();
        $(`${MODAL_SELECTOR} button[data-warpjs-action="save"]`).prop('disabled', false);
    });

    $(document).on('click', `${MODAL_SELECTOR} .modal-footer [data-warpjs-action="save"]`, function() {
        const form = $(`${MODAL_SELECTOR} .modal-body form`);

        const data = {
            choice: $('input[name="choice"]:checked', form).val(),
            text: $('[name="text"]', form).val()
        };

        return Promise.resolve()
            .then(() => toast.loading($, "Saving feedback..."))
            .then((loadingToast) => Promise.resolve()
                .then(() => simulate($, data))
                .then(() => $(MODAL_SELECTOR).modal('hide'))
                .then(() => toast.success($, "Thank you for your feedback.", "Feedback"))
                .catch((err) => toast.error($, `Something wrong: ${err.message}`, "Feedback error"))
                .finally(() => toast.close($, loadingToast))
            )
        ;
    });
};
