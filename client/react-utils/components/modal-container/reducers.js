import extend from 'lodash/extend';

import actions from './actions';
import concatenateReducers from './../../concatenate-reducers';
import namespace from './namespace';

// import _debug from './debug'; const debug = _debug('reducers');

const NAMESPACE = namespace();

const show = (state = {}, action) => {
    const subState = state[NAMESPACE] || {};
    const subStateInstance = subState[action.payload.id] || {};

    subStateInstance.show = true;

    const newSubstate = extend({}, subState, { [action.payload.id]: subStateInstance });

    return extend({}, state, { [NAMESPACE]: newSubstate });
};

const hide = (state = {}, action) => {
    const subState = state[NAMESPACE] || {};
    const subStateInstance = subState[action.payload.id] || {};

    subStateInstance.show = false;

    const newSubstate = extend({}, subState, { [action.payload.id]: subStateInstance });

    return extend({}, state, { [NAMESPACE]: newSubstate });
};

export default concatenateReducers([
    { actions: [ actions.SHOW ], reducer: show },
    { actions: [ actions.HIDE ], reducer: hide }
]);
