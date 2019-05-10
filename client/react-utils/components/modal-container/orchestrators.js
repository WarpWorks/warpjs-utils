import * as actionCreators from './action-creators';

// import _debug from './debug'; const debug = _debug('orchestrators');

export const hide = async (dispatch, id, onHide) => {
    dispatch(actionCreators.hide(id));
    if (onHide) {
        onHide();
    }
};

export const show = async (dispatch, id) => {
    dispatch(actionCreators.show(id));
};
