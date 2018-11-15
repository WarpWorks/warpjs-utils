import PropTypes from 'prop-types';

import errorBoundary from './../../error-boundary';

const Component = (props) => {
    const renderItems = () => props.items.map((item) => props.itemRender(item));
    return props.listRender(props.items, () => renderItems());
};

Component.displayName = "BaseList";

Component.propTypes = {
    items: PropTypes.array.isRequired,
    listRender: PropTypes.func.isRequired,
    itemRender: PropTypes.func.isRequired
};

export default errorBoundary(Component);
