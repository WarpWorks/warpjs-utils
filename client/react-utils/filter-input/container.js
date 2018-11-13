import cloneDeep from 'lodash/cloneDeep';

import * as actionCreators from './action-creators';
import Component from './component.jsx';
import selector from './../selector-base';
import wrapContainer from './../wrap-container';

const mapStateToProps = (state, ownProps) => {
    const cloned = cloneDeep(state);
    const subState = selector(cloned, Component, ownProps.id);

    return Object.freeze({
        filterValue: subState.filterValue
    });
};

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
    updateValue: (event) => dispatch(actionCreators.updateValue(ownProps.id, event.target.value))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    ...ownProps
});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);
