import cloneDeep from 'lodash/cloneDeep';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Component from './component';
import * as constants from './constants';
import * as orchestrators from './orchestrators';
import selector from './../selector';
import wrapHookContainer from './../../wrap-hook-container';

const getComponentProps = (props) => {
    const dispatch = useDispatch();
    const subState = useSelector((state) => selector(cloneDeep(state), Component, props.componentId));

    const status = subState ? subState.status : constants.STATUS.CLEAN;
    const autoSaveFieldStatus = status || constants.STATUS.CLEAN;

    return Object.freeze({
        autoSaveFieldStatus,
        autoSaveFieldValidationState: constants.validationStateByStatus(status),
        autoSaveFieldChanged: (event) => orchestrators.changed(dispatch, props.componentId, event, props.changed),
        autoSaveFieldSave: (event) => orchestrators.save(dispatch, props.componentId, event, props.save, autoSaveFieldStatus),
        ...props
    });
};

const propTypes = {
    changed: PropTypes.func.isRequired,
    componentId: PropTypes.string.isRequired,
    save: PropTypes.func.isRequired
};

export default wrapHookContainer(Component, getComponentProps, propTypes);
