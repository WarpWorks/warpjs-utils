import PropTypes from 'prop-types';

export const BUTTON = PropTypes.shape({
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    glyph: PropTypes.string,
    style: PropTypes.oneOf([
        'default',
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'link'
    ]),
    onClick: PropTypes.func,
    size: PropTypes.oneOf([
        'lg',
        'sm',
        'xs'
    ]),
    title: PropTypes.string
});
