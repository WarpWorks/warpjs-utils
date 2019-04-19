import cloneDeep from 'lodash/cloneDeep';
import extend from 'lodash/extend';

export default (state = {}, namespace, newSubstate) => extend(cloneDeep(state), { [namespace()]: cloneDeep(newSubstate) });
