import isArray from 'lodash/isArray';
import PropTypes from 'prop-types';
import { MenuItem, Modal, SplitButton } from 'react-bootstrap';

import Button from './../button';
import errorBoundary from './../../error-boundary';
import { BUTTON as BUTTON_SHAPE } from './../shapes';

// import _debug from './debug'; const debug = _debug('component');

const buttons = (buttonInfos) => buttonInfos.map((buttonInfo, index) => {
    if (isArray(buttonInfo)) {
        if (buttonInfo.length === 1) {
            return <Button key={index} {...buttonInfo[0]} />;
        } else {
            const first = buttonInfo[0];

            const menuItems = buttonInfo.filter((menuItem, index) => index).map((menuItem, index) => (
                <MenuItem key={index} onClick={menuItem.onClick}>{menuItem.label}</MenuItem>
            ));

            return (
                <SplitButton key={index} bsStyle={first.style} title={first.label} onClick={first.onClick} dropup pullRight>
                    {menuItems}
                </SplitButton>
            );
        }
    } else {
        return <Button key={index} {...buttonInfo} />;
    }
});

const Component = (props) => {
    const title = props.title
        ? <Modal.Title>{props.title}</Modal.Title>
        : null
    ;

    const header = title
        ? <Modal.Header closeButton>{title}</Modal.Header>
        : null
    ;

    const footer = props.footerButtons && props.footerButtons.length
        ? <Modal.Footer>{buttons(props.footerButtons)}</Modal.Footer>
        : null
    ;

    return (
        <Modal bsSize="large" className={`${props.className} warpjs-react-modal`} show={props.show} onHide={props.onHide}
            data-warpjs-modal={props.id}
        >
            {header}
            <Modal.Body>
                {props.children}
            </Modal.Body>
            {footer}
        </Modal>
    );
};

Component.displayName = 'ModalContainer';

Component.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    footerButtons: PropTypes.arrayOf(BUTTON_SHAPE),
    id: PropTypes.string.isRequired,
    onHide: PropTypes.func,
    show: PropTypes.bool,
    size: PropTypes.oneOf([ 'lg', 'large', 'sm', 'small' ]),
    title: PropTypes.string
};

Component.defaultProps = {
    size: 'large'
};

export default errorBoundary(Component);
