import errorBoundary from './../../error-boundary';

const Component = (props) => {
    return (
        <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
    );
};

Component.displayName = 'Loading';

export default errorBoundary(Component);
