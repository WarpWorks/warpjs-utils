import getNamespaceSubstate from './get-namespace-substate';
import setNamespaceSubstate from './set-namespace-substate';

export default (state = {}, namespace, key, value) => {
    const substate = getNamespaceSubstate(state, namespace);
    substate[key] = value;
    return setNamespaceSubstate(state, namespace, substate);
};
