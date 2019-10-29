import cloneDeep from 'lodash/cloneDeep';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Component from './component';
import * as orchestrators from './orchestrators';
import selector from './../selector';
import wrapHookContainer from './../../wrap-hook-container';

const getComponentProps = (props) => {
    const dispatch = useDispatch();
    const subState = useSelector((state) => selector(cloneDeep(state), Component, props.componentId));

    return Object.freeze({
        ...props,
        filterableListValue: subState ? subState.value : '',
        filterableListChanged: (event) => orchestrators.changed(dispatch, props.componentId, event)
    });
};

const propTypes = {
    componentId: PropTypes.string.isRequired,
    componentRender: PropTypes.func.isRequired
};

export default wrapHookContainer(Component, getComponentProps, propTypes);
