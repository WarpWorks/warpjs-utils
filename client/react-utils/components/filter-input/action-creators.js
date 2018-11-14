import actions from './actions';
import actionCreator from './../action-creator';

export const updateValue = (id, value) => actionCreator(actions.UPDATE_VALUE, { id, value });
