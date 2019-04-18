import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import errorBoundary from './../../error-boundary';

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
        ? <Modal.Footer>TODO: Modal.Footer</Modal.Footer>
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
    footerButtons: PropTypes.array,
    id: PropTypes.string.isRequired,
    onHide: PropTypes.func,
    show: PropTypes.bool,
    title: PropTypes.string,
};

export default errorBoundary(Component);
