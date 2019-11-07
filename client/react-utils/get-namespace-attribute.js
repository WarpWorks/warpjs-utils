import cloneDeep from 'lodash/cloneDeep';

import getNamespaceSubstate from './get-namespace-substate';

export default (state = {}, namespace, attribute, defaultValue) => {
    const substate = getNamespaceSubstate(state, namespace);
    return cloneDeep(substate[attribute] || defaultValue);
};
