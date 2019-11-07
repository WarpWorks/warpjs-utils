import getNamespaceSubstate from './get-namespace-substate';
import setNamespaceSubstate from './set-namespace-substate';

export default (state, namespace, attribute, value) => {
    const substate = getNamespaceSubstate(state, namespace);
    substate[attribute] = value;
    return setNamespaceSubstate(state, namespace, substate);
};
