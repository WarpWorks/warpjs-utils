import errorBoundary from './error-boundary';
import baseComponentName from './base-component-name';

export default (Component, getComponentProps, propTypes) => {
    const Container = (props) => <Component {...getComponentProps(props)} />;
    Container.displayName = `${baseComponentName(Component.displayName)}Container`;
    Container.propTypes = propTypes || Component.propTypes;
    return errorBoundary(Container);
};
