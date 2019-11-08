import classnames from 'classnames';
import { Fragment } from 'react';
import { Button, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';

import errorBoundary from './../error-boundary';
import { BUTTON as BUTTON_SHAPE } from './shapes';

const Component = (props) => {
    const ownClassnames = props.className ? props.className.split(' ') : [];

    const classes = classnames(
        ...ownClassnames,
        'warpjs-button',
        {
            'no-outline': !props.outline,
            'warpjs-button-with-glyph': Boolean(props.glyph),
            'warpjs-button-with-label': Boolean(props.label),
            [`btn-inverse-${props.style}`]: props.inverse
        }
    );

    const glyph = props.glyph ? <Glyphicon glyph={props.glyph} className="warpjs-button-glyph" /> : null;

    const buttonChildren = props.children || <Fragment>{glyph}{props.label || null}</Fragment>;
    const button = <Button bsStyle={props.style} bsSize={props.size} onClick={props.onClick} className={classes} disabled={props.disabled}>{buttonChildren}</Button>;

    return (props.title)
        ? <OverlayTrigger placement="top" overlay={<Tooltip>{props.title}</Tooltip>}>{button}</OverlayTrigger>
        : button
    ;
};

Component.displayName = 'WarpjsButton';

Component.propTypes = BUTTON_SHAPE;

Component.defaultProps = {
    disabled: false,
    inverse: false,
    outline: true,
    style: 'primary'
};

export default errorBoundary(Component);
