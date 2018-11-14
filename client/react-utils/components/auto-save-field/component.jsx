import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';

import { glyphByStatus } from './constants';
import errorBoundary from './../../error-boundary';

const Component = (props) => {
    const controlLabel = props.label
        ? <ControlLabel>{props.label}</ControlLabel>
        : null
    ;

    return (
        <FormGroup className={`warpjs-auto-save-field warpjs-auto-save-field-status-${props.autoSaveFieldStatus}`}
            validationState={props.autoSaveFieldValidationState}
        >
            {controlLabel}
            <FormControl type="text"
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.autoSaveFieldChanged}
                onBlur={props.autoSaveFieldSave}
                className="warpjs-auto-save-field-input"
            />
            <FormControl.Feedback>
                <Glyphicon glyph={glyphByStatus(props.autoSaveFieldStatus)} />
            </FormControl.Feedback>
        </FormGroup>
    );
};

Component.displayName = "AutoSaveField";

Component.propTypes = {
    autoSaveFieldChanged: PropTypes.func.isRequired,
    autoSaveFieldSave: PropTypes.func.isRequired,
    autoSaveFieldStatus: PropTypes.string.isRequired,
    autoSaveFieldValidationState: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

export default errorBoundary(Component);
