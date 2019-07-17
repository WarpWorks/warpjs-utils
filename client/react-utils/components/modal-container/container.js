import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';

import Component from './component';
import * as orchestrators from './orchestrators';
import namespace from './namespace';
import wrapContainer from './../../wrap-container';

const NAMESPACE = namespace();

const mapStateToProps = (state, ownProps) => {
    const subState = state[NAMESPACE] || {};
    return Object.freeze(cloneDeep(subState[ownProps.id] || {}));
};

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
    onHide: () => orchestrators.hide(dispatch, ownProps.id, ownProps.onHide)
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    ...omit(ownProps, [ 'onHide' ])
});

const Container = wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);

Container.propTypes = {
    id: PropTypes.string.isRequired,
    onHide: PropTypes.func
};

export default Container;
