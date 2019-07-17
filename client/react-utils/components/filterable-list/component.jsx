import PropTypes from 'prop-types';
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap';

import errorBoundary from './../../error-boundary';

const Component = (props) => {
    const inputComponent = (
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
    );

    return props.componentRender(inputComponent, props.filterableListValue);
};

Component.displayName = "FilterableList";

Component.propTypes = {
    filterableListValue: PropTypes.string,
    filterableListChanged: PropTypes.func.isRequired,
    componentRender: PropTypes.func.isRequired
};

export default errorBoundary(Component);
