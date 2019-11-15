import errorBoundary from './../error-boundary';
import { classnames, PropTypes } from './../third-parties';

const Component = (props) => {
    const classNames = classnames(
        'warpjs-rounded-checkbox',
        {
            'warpjs-rounded-checkbox-checked': props.checked,
            'warpjs-rounded-checkbox-click': props.onClick
        }
    );

    return (
        <div className={classNames}>
            <span className="warpjs-rounded-checkbox-image" onClick={props.onClick}></span>
            <span className="warpjs-rounded-checkbox-label" onClick={props.onClick}>{props.children}</span>
        </div>
    );
};

Component.displayName = 'WarpjsRoundedCheckbox';

Component.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func
};

Component.defaultProps = {
};

export default errorBoundary(Component);
