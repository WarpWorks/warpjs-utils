import cloneDeep from 'lodash/cloneDeep';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { updateValue } from './action-creators';
import Component from './component.jsx';
import selector from './../selector';
import wrapHookContainer from './../wrap-hook-container';

const getComponentProps = (props) => {
    const dispatch = useDispatch();
    const cloned = useSelector((state) => cloneDeep(state));
    const subState = selector(cloned, Component, props.id);

    return Object.freeze({
        filterValue: subState.filterValue,
        updateValue: (event) => dispatch(updateValue(props.id, event.target.value)),
        ...props
    });
};

const propTypes = {
    id: PropTypes.string.isRequired
};

export default wrapHookContainer(Component, getComponentProps, propTypes);
