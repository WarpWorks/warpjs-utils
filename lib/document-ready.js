module.exports = ($) => {
    $(document).on('click', 'form.header-search [data-warpjs-action="search"]', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(this).closest('form').submit();
    });
};
