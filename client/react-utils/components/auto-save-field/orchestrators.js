import * as actionCreators from './action-creators';
import { STATUS } from './constants';

export const changed = (dispatch, key, event, fn) => {
    dispatch(actionCreators.updateStatus(key, STATUS.DIRTY));
    fn(event);
};

export const save = async (dispatch, key, event, fn, status) => {
    if (status === STATUS.DIRTY) {
        dispatch(actionCreators.updateStatus(key, STATUS.SAVING));

        try {
            await fn(event);
            dispatch(actionCreators.updateStatus(key, STATUS.SAVED));

            setTimeout(() => dispatch(actionCreators.updateStatus(key, STATUS.CLEAN)), 2000);
        } catch (err) {
            dispatch(actionCreators.updateStatus(key, STATUS.ERROR));
            throw err;
        }
    }
};
