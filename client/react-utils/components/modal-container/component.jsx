import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import Button from './../button';
import errorBoundary from './../../error-boundary';
import * as SHAPES from './../shapes';

const buttons = (buttonInfos) => buttonInfos.map((buttonInfo, index) => <Button key={index} {...buttonInfo} />);

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
    footerButtons: PropTypes.arrayOf(SHAPES.BUTTON),
    id: PropTypes.string.isRequired,
    onHide: PropTypes.func,
    show: PropTypes.bool,
    size: PropTypes.oneOf(['lg', 'large', 'sm', 'small']),
    title: PropTypes.string,
};

Component.defaultProps = {
    size: 'large'
};

export default errorBoundary(Component);
