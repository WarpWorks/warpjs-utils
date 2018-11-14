import baseComponentName from './base-component-name';

export default (state, packageName, Component, id) => {
    if (!packageName) {
        throw new Error(`Missing 'packageName'.`);
    } else if (!state[packageName]) {
        state[packageName] = {};
    }

    if (!Component) {
        throw new Error(`Missing 'Component'.`);
    }

    const componentName = baseComponentName(Component.displayName);
    if (!componentName) {
        throw new Error(`Missing 'Component.displayName'.`);
    } else if (!state[packageName][componentName]) {
        state[packageName][componentName] = {};
    }

    if (!id) {
        throw new Error(`Missing 'id'.`);
    } else if (!state[packageName][componentName][id]) {
        state[packageName][componentName][id] = {};
    }

    return state[packageName][componentName][id];
};
