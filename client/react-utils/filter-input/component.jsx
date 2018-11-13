import PropTypes from 'prop-types';
import { FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';

import errorBoundary from './../error-boundary';

const Component = (props) => {
    return (
        <FormGroup className="warpjs-filter-input">
            <InputGroup>
                <FormControl type="text"
                    placeholder="Filter items"
                    defaultValue={props.filterValue}
                    onChange={props.updateValue}
                />
                <InputGroup.Addon>
                    <Glyphicon glyph="filter" />
                </InputGroup.Addon>
            </InputGroup>
        </FormGroup>
    );
};

Component.displayName = "FilterInput";

Component.propTypes = {
    filterValue: PropTypes.string,
    updateValue: PropTypes.func.isRequired
};

export default errorBoundary(Component);
