import cloneDeep from 'lodash/cloneDeep';

import actions from './actions';
import Component from './component';
import concatenateReducers from './../../concatenate-reducers';
import selector from './../selector';

const updateStatus = (state = {}, action) => {
    const cloned = cloneDeep(state);
    const subState = selector(cloned, Component, action.payload.key);

    subState.status = action.payload.status;

    return cloned;
};

export default concatenateReducers([
    { actions: [actions.UPDATE_STATUS], reducer: updateStatus }
]);
