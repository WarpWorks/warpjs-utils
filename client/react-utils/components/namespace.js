import namespace from './../namespace';
import packageJson from './../../../package.json';

export default (key) => namespace(`${packageJson.name}.${key}`);
