import setNamespaceSubstate from './set-namespace-substate';

export default (state = {}, namespace, value) => setNamespaceSubstate(state, namespace, value);
