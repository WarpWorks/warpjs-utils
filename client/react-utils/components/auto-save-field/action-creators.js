import actionCreator from './../../action-creator';
import actions from './actions';

export const updateStatus = (key, status) => actionCreator(actions.UPDATE_STATUS, { key, status });
