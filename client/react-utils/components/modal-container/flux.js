import actionCreator from './../../action-creator';
import concatenateReducers from './../../concatenate-reducers';
import getNamespaceSubstate from './../../get-namespace-substate';
import namespaceKeys from './../../namespace-keys';
import setNamespaceSubstate from './../../set-namespace-substate';

import namespace from './namespace';

// import _debug from './debug'; const debug = _debug('flux');

const actions = namespaceKeys(namespace, [
    'HIDE',
    'SHOW'
]);

const actionCreators = Object.freeze({
    hide: (id) => actionCreator(actions.HIDE, { id }),
    show: (id) => actionCreator(actions.SHOW, { id })
});

export const orchestrators = Object.freeze({
    hide: async (dispatch, id, onHide) => {
        dispatch(actionCreators.hide(id));
        if (onHide) {
            onHide();
        }
    },

    show: async (dispatch, id) => {
        dispatch(actionCreators.show(id));
    }
});

const getSubstate = (state = {}, id) => {
    const subState = getNamespaceSubstate(state, namespace);
    subState[id] = subState[id] || {};
    return subState;
};

const show = (state = {}, action) => {
    const subState = getSubstate(state, action.payload.id);
    subState[action.payload.id].show = true;
    return setNamespaceSubstate(state, namespace, subState);
};

const hide = (state = {}, action) => {
    const subState = getSubstate(state, action.payload.id);
    subState[action.payload.id].show = false;
    return setNamespaceSubstate(state, namespace, subState);
};

export const reducers = concatenateReducers([
    { actions: [ actions.SHOW ], reducer: show },
    { actions: [ actions.HIDE ], reducer: hide }
]);
