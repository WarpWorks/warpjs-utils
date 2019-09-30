import classnames from 'classnames';
import { Button, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';

import errorBoundary from './../error-boundary';
import * as SHAPES from './shapes';

const Component = (props) => {
    const classes = classnames({
        'warpjs-button': true,
        'warpjs-button-with-glyph': Boolean(props.glyph),
        'warpjs-button-with-label': Boolean(props.label)
    });

    const glyph = props.glyph ? <Glyphicon glyph={props.glyph} className="warpjs-button-glyph" /> : null;

    const button = <Button bsStyle={props.style} bsSize={props.size} onClick={props.onClick} className={classes} disabled={props.disabled}>{glyph}{props.label || null}</Button>;

    return (props.title)
        ? <OverlayTrigger placement="top" overlay={<Tooltip>{props.title}</Tooltip>}>{button}</OverlayTrigger>
        : button
    ;
};

Component.displayName = 'WarpjsButton';

Component.propTypes = SHAPES.BUTTON;

Component.defaultProps = {
    disabled: false,
    style: 'primary'
};

export default errorBoundary(Component);
