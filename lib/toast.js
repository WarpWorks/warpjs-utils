const LOADER_BG = {
    error: '#ebccd1',
    info: '#bce8f1',
    success: '#d6e9c6',
    warning: '#faebcc'
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

function loading($, text) {
    return $.toast({
        text: `${text} <span class="glyphicon glyphicon-hourglass"></span>...`,
        icon: 'info',
        showHideTransition: 'fade',
        allowToastClose: false,
        hideAfter: false,
        stack: false,
        position: 'top-right',
        textAlign: 'left'
    });
};

module.exports = {
    error: ($, text, heading) => base($, text, heading, 'error'),
    info: ($, text, heading) => base($, text, heading, 'info'),
    success: ($, text, heading) => base($, text, heading, 'success'),
    warning: ($, text, heading) => base($, text, heading, 'warning'),
    loading: ($, text) => loading($, text),
    close: ($, toast) => toast.reset(),
    closeAll: ($) => $.toast.reset('all')
};
