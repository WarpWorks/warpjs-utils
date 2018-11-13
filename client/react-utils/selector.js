export default (state, packageName, componentName, id) => {
    if (!packageName) {
        throw new Error(`Missing 'packageName'.`);
    } else if (!state[packageName]) {
        state[packageName] = {};
    }

    if (!componentName) {
        throw new Error(`Missing 'componentName'.`);
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
