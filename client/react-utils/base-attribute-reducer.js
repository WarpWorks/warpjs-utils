import setNamespaceAttribute from './set-namespace-attribute';

export default (state = {}, namespace, key, value) => {
    // eslint-disable-next-line no-console
    console.error(`*** DEPRECATED baseAttributeReducer(). Use setNamespaceAttribute() instead ***`);
    return setNamespaceAttribute(state, namespace, key, value);
};
