import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';

import Component from './component';
import * as orchestrators from './orchestrators';
import selector from './../selector';
import wrapContainer from './../../wrap-container';

const mapStateToProps = (state, ownProps) => {
    const subState = selector(cloneDeep(state), Component, ownProps.componentId);

    return Object.freeze({
        filterableListValue: subState ? subState.value : ''
    });
};

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
    filterableListChanged: (event) => orchestrators.changed(dispatch, ownProps.componentId, event)
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    ...omit(ownProps, [ 'filterableListValue', 'filterableListChanged' ])
});

const Container = wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);

Container.propTypes = {
    componentId: PropTypes.string.isRequired,
    componentRender: PropTypes.func.isRequired
};

export default Container;
