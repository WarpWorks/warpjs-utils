import PropTypes from 'prop-types';

export const BUTTON = PropTypes.shape({
    children: PropTypes.node, // Custom content.
    className: PropTypes.string, // Any custom classes
    disabled: PropTypes.bool, // If button is disabled. Default: false
    label: PropTypes.string, // Button text. Ignored if props.children.
    glyph: PropTypes.string, // Glyph to put at left of label, if any. Ignored if props.children.
    inverse: PropTypes.bool, // If button should be inversed colors. Default: false
    onClick: PropTypes.func,
    outline: PropTypes.bool, // Show border or not. Default: true
    style: PropTypes.oneOf([ // Button style. Default: primary
        'default',
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'link'
    ]),
    size: PropTypes.oneOf([
        'lg',
        'sm',
        'xs'
    ]),
    title: PropTypes.string // Text of tooltip
});
