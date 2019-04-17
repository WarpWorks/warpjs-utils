import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import errorBoundary from './../../error-boundary';

const Component = (props) => {
    const title = props.title
        ? <Modal.Title>{props.title}</Modal.Title>
        : null
    ;

    return (
        <Modal bsSize="large" show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                {title}
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
};

Component.displayName = 'ModalContainer';

Component.propTypes = {
    children: PropTypes.element,
    onHide: PropTypes.func,
    show: PropTypes.bool,
    title: PropTypes.string,
};

export default errorBoundary(Component);
