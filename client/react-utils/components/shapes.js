import PropTypes from 'prop-types';

export const BUTTON = PropTypes.shape({
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
    onClick: PropTypes.func
});
