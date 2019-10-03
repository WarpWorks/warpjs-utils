import PropTypes from 'prop-types';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import Button from './button';

const Component = (props) => {
    const popover = (
        <Popover title={props.title}>
            <Button label="Confirm" glyph={props.glyph} style="danger" onClick={props.onConfirm} />
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            {props.children}
        </OverlayTrigger>
    );
};

Component.propTypes = {
    children: PropTypes.node,
    glyph: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    title: PropTypes.string,
    style: PropTypes.string
};
