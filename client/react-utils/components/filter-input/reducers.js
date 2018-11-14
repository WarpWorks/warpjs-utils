import cloneDeep from 'lodash/cloneDeep';

import actions from './actions';
import Component from './component.jsx';
import concatenateReducers from './../../concatenate-reducers';
import selector from './../selector';

const updateValue = (state = {}, action) => {
    const cloned = cloneDeep(state);

    const subState = selector(cloned, Component, action.payload.id);
    subState.filterValue = action.payload.value;

    return cloned;
};

export default concatenateReducers([
    { actions: [actions.UPDATE_VALUE], reducer: updateValue }
]);
