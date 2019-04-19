import cloneDeep from 'lodash/cloneDeep';

export default (state = {}, namespace) => cloneDeep(state[namespace()] || {});
