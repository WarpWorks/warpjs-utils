import * as actionCreators from './action-creators';

export const changed = (dispatch, componentId, event) => {
    dispatch(actionCreators.updateValue(componentId, event.target.value));
};
