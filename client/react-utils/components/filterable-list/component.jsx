import PropTypes from 'prop-types';
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap';

import errorBoundary from './../../error-boundary';
import FilteredList from './../filtered-list';

const Component = (props) => {

    return (
        <div className="warpjs-filterable-list">
            <div className="warpjs-filterable-list-filter">
                <FormGroup>
                    <FormControl type="text"
                        value={props.filterableListValue}
                        placeholder="Filter items"
                        className="warpjs-filterable-list-filter-input"
                        onChange={props.filterableListChanged}
                    />
                    <FormControl.Feedback>
                        <Glyphicon glyph="filter" />
                    </FormControl.Feedback>
                </FormGroup>
            </div>
            <div className="warpjs-filterable-list-results">
                <FilteredList
                    filterValue={props.filterableListValue}
                    filter={props.filter}
                    items={props.items}
                    listRender={props.listRender}
                    itemRender={props.itemRender}
                />
            </div>
        </div>
    );
};

Component.displayName = "FilterableList";

Component.propTypes = {
    filterableListValue: PropTypes.string,
    filterableListChanged: PropTypes.func.isRequired,
    filter: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    listRender: PropTypes.func.isRequired,
    itemRender: PropTypes.func.isRequired
};

export default errorBoundary(Component);

