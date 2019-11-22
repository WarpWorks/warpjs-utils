import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';

import errorBoundary from './../error-boundary';

import Confirm from './confirm';
import Tooltip from './tooltip';

const Component = (props) => {
    const classNames = classnames(
        {
            'warpjs-action-icon': true,
            'warpjs-clickable': Boolean(props.onClick || props.onConfirm),
            [`text-${props.style}`]: Boolean(props.style),
            [props.size]: Boolean(props.size)
        },
        ...props.className.split(' ')
    );

    let C = <Glyphicon className={classNames} glyph={props.glyph} />;

    if (props.onClick) {
        C.props.onClick = props.onClick;
    }

    if (props.title) {
        C = <Tooltip title={props.title}>{C}</Tooltip>;
    }

    if (props.onConfirm) {
        C = <Confirm title={props.title} onConfirm={props.onConfirm}>{C}</Confirm>;
    }

    return C;
};

Component.propTypes = {
    className: PropTypes.string,
    confirm: PropTypes.func,
    glyph: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.oneOf([
        'small'
    ]),
    style: PropTypes.oneOf([
        'muted',
        'primary',
        'success',
        'info',
        'warning',
        'danger'
    ]),
    title: PropTypes.string
};

Component.defaultProps = {
    className: ''
};

export default errorBoundary(Component);
