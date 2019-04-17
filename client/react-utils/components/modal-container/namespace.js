import namespace from './../namespace';

export default (path) => namespace(`MODAL-CONTAINER${path ? `.${path}` : ''}`);
