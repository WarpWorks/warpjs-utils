import setNamespaceAttribute from './set-namespace-attribute';

export default (state = {}, namespace, key, value) => {
    console.error(`*** DEPRECATED baseAttributeReducer(). Use setNamespaceAttribute() instead ***`);
    return setNamespaceAttribute(state, namespace, key, value);
};
