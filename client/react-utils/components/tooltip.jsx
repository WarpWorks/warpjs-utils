import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import errorBoundary from './../error-boundary';

const Component = (props) => {
    const tooltip = <Tooltip>{props.title}</Tooltip>;

    return (
        <OverlayTrigger trigger={[ 'hover', 'focus' ]} placement="top" overlay={tooltip}>
            {props.children}
        </OverlayTrigger>
    );
};

Component.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
};

export default errorBoundary(Component);
