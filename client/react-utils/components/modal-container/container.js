import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import getNamespaceSubstate from './../../get-namespace-substate';
import wrapHookContainer from './../../wrap-hook-container';

import Component from './component';
import { orchestrators } from './flux';
import namespace from './namespace';

const getComponentProps = (props) => {
    const dispatch = useDispatch();
    const subState = useSelector((state) => getNamespaceSubstate(state, namespace));

    return Object.freeze({
        ...(subState[props.id] || {}),
        ...props,
        onHide: () => orchestrators.hide(dispatch, props.id, props.onHide)
    });
};

const propTypes = {
    id: PropTypes.string.isRequired,
    onHide: PropTypes.func
};

export default wrapHookContainer(Component, getComponentProps, propTypes);
