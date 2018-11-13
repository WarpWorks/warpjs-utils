import PropTypes from 'prop-types';

import errorBoundary from '../error-boundary';

const Component = (props) => {

    return (
        <div className="warpjs-filterable-list">
            <div className="warpjs-filterable-list-filter">
            </div>
            <div className="warpjs-filterable-list-results">
            </div>
        </div>
    );
};

Component.displayName = "FilterableList";

Component.propTypes = {
    listRenderer: PropTypes.func.isRequired, // (filterCondition) => PropTypes.element
    filterValue: PropTypes.string
};

export default errorBoundary(Component);

