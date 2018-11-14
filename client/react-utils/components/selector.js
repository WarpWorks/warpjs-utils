import packageJson from './../../../package.json';
import selector from './../selector';

export default (state, Component, id) => selector(state, packageJson.name, Component, id);
