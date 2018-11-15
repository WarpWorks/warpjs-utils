import PropTypes from 'prop-types';

import errorBoundary from './../../error-boundary';

const Component = (props) => {
    const renderItems = () => {
        const filterValue = props.filterValue.trim();
        const items = (filterValue) ? props.items.filter((item) => props.filter(filterValue, item)) : props.items;
        return items.map((item) => props.itemRender(item));
    };

    return props.listRender(props.items, () => renderItems());
};

Component.displayName = "FilteredList";

Component.propTypes = {
    filterValue: PropTypes.string,
    filter: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    listRender: PropTypes.func.isRequired,
    itemRender: PropTypes.func.isRequired
};

export default errorBoundary(Component);
