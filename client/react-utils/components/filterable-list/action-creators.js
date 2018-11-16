import actionCreator from './../../action-creator';
import actions from './actions';

export const updateValue = (key, value) => actionCreator(actions.UPDATE_VALUE, { key, value });
