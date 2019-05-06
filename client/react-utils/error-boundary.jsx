import baseComponentName from './base-component-name';

import _debug from './debug'; const debug = _debug('error-boundary');

export const SUFFIX = 'ErrorBoundary';

export default (Component) => {
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            debug("getDerivedStateFromError(): error=", error);
            return { hasError: true };
        }

        componentDidCatch(error, info) {
            // You can also log the error to an error reporting service
            debug("Got error:", error, info);
            // eslint-disable-next-line no-console
            console.error(`${ErrorBoundary.displayName}.componentDidCatch(): info=`, (info && info.componentStack) ? info.componentStack : info);
        }

        render() {
            if (this.state.hasError) {
                return <h1 className="text-danger">*** REACT ERROR: Something went wrong. ***</h1>;
            }

            return <Component {...this.props} />;
        }
    }

    ErrorBoundary.displayName = `${baseComponentName(Component.displayName)}${SUFFIX}`;
    ErrorBoundary.propTypes = Component.propTypes;
    ErrorBoundary.defaultProps = Component.defaultProps;

    return ErrorBoundary;
};
