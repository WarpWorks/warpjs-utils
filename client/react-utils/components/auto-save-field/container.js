import cloneDeep from 'lodash/cloneDeep'
import PropTypes from 'prop-types';

import Component from './component';
import * as constants from './constants';
import * as orchestrators from './orchestrators';
import selector from './../selector';
import wrapContainer from './../../wrap-container';

const mapStateToProps = (state, ownProps) => {
    const subState = selector(cloneDeep(state), Component, ownProps.componentId);

    const status = subState ? subState.status : constants.STATUS.CLEAN;

    return Object.freeze({
        autoSaveFieldStatus: status || constants.STATUS.CLEAN,
        autoSaveFieldValidationState: constants.validationStateByStatus(status)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
    autoSaveFieldChanged: (event) => orchestrators.changed(dispatch, ownProps.componentId, event, ownProps.changed),
    autoSaveFieldSave: (status) => (event) => orchestrators.save(dispatch, ownProps.componentId, event, ownProps.save, status)
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    autoSaveFieldSave: dispatchProps.autoSaveFieldSave(stateProps.autoSaveFieldStatus),
    ...ownProps
});

const Container = wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);

Container.propTypes = {
    changed: PropTypes.func.isRequired,
    componentId: PropTypes.string.isRequired,
    save: PropTypes.func.isRequired
};

export default Container;
