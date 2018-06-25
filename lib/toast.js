const ICONS = {
    ERROR: 'error',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning'
};

const LOADER_BG = {
    [ICONS.ERROR]: '#ebccd1',
    [ICONS.INFO]: '#bce8f1',
    [ICONS.SUCCESS]: '#d6e9c6',
    [ICONS.WARNING]: '#faebcc'
};

function base($, text, heading, icon) {
    return $.toast({
        text,
        heading,
        icon,
        loaderBg: LOADER_BG[icon],

        showHideTransition: 'fade', // fade, slide or plain
        allowToastClose: true,
        hideAfter: 3000,
        stack: 5,
        position: 'top-right',
        textAlign: 'left',
        loader: true
    });
}

function loading($, text, heading) {
    return $.toast({
        text: `${text} <span class="glyphicon glyphicon-hourglass"></span>...`,
        heading,
        icon: ICONS.INFO,
        showHideTransition: 'fade',
        allowToastClose: false,
        hideAfter: false,
        stack: false,
        position: 'top-right',
        textAlign: 'left'
    });
};

module.exports = {
    error: ($, text, heading) => base($, text, heading, ICONS.ERROR),
    info: ($, text, heading) => base($, text, heading, ICONS.INFO),
    success: ($, text, heading) => base($, text, heading, ICONS.SUCCESS),
    warning: ($, text, heading) => base($, text, heading, ICONS.WARNING),
    loading: ($, text, heading) => loading($, text, heading),
    close: ($, toast) => toast.reset(),
    closeAll: ($) => $.toast.reset('all')
};
