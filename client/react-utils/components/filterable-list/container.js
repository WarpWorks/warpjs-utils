import omit from 'lodash/omit';
import PropTypes from 'prop-types';

import Component from './component';
// import * as orchestrators from './orchestrators';
import wrapContainer from './../../wrap-container';

const mapStateToProps = (state, ownProps) => Object.freeze({
    filterValue: 'Am'
});

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    ...omit(ownProps, ['filterValue'])
});

const Container = wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);

Container.propTypes = {
    condition: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default  Container;
