import classnames from 'classnames';
import { Button, Glyphicon } from 'react-bootstrap';

import errorBoundary from './../error-boundary';
import * as SHAPES from './shapes';

const Component = (props) => {
    const classes = classnames({
        'warpjs-button': true,
        'warpjs-button-with-glyph': Boolean(props.glyph),
        'warpjs-button-with-label': Boolean(props.label),
    });

    const glyph = props.glyph ? <Glyphicon glyph={props.glyph} className="warpjs-button-glyph" /> : null;

    return <Button bsStyle={props.style} onClick={props.onClick} className={classes}>{glyph}{props.label || null}</Button>;
};

Component.displayName = 'WarpjsButton';

Component.propTypes = SHAPES.BUTTON;

Component.defaultProps = {
    style: 'primary'
};

export default errorBoundary(Component);
