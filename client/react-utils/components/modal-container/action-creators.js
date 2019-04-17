import actions from './actions';
import actionCreator from './../../action-creator';

// import _debug from './debug'; const debug = _debug('action-creators');

export const hide = (id) => actionCreator(actions.HIDE, { id });

export const show = (id) => actionCreator(actions.SHOW, { id });
