const constants = require('./constants');

module.exports = ($) => {
    console.log("warpjsUtils.documentReady()...");

    $(constants.CONTENT_PLACEHOLDER).on('click', '.i3c-portal--header .search-in-header [data-warpjs-action="expand"]', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(`${constants.CONTENT_PLACEHOLDER} .i3c-portal--header .search-in-header [data-warpjs-action="expand"]`).hide();
        $(`${constants.CONTENT_PLACEHOLDER} .i3c-portal--header .search-in-header .search-expanded`).show();
    });

    $(constants.CONTENT_PLACEHOLDER).on('click', '.i3c-portal--header .search-in-header [data-warpjs-action="search"]', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(this).closest('form').submit();
    });

    $(constants.CONTENT_PLACEHOLDER).on('click', '.i3c-portal--header .search-in-header [data-warpjs-action="cancel"]', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(this).closest('.search-expanded').hide();
        $(`${constants.CONTENT_PLACEHOLDER} .i3c-portal--header .search-in-header [data-warpjs-action="expand"]`).show();
    });
};
