import Component from './component';
// import * as orchestrators from './orchestrators';
import wrapContainer from './../warp-container';

const mapStateToProps = (state, ownProps) => Object.freeze({
});

const mapDispatchToProps = (dispatch, ownProps) => Object.freeze({
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.freeze({
    ...stateProps,
    ...dispatchProps,
    ...ownProps
});

export default wrapContainer(Component, mapStateToProps, mapDispatchToProps, mergeProps);
