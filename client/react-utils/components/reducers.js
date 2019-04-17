import concatenateReducers from './../concatenate-reducers';

import autoSaveFieldReducers from './auto-save-field/reducers';
import filterableListReducers from './filterable-list/reducers';
import filterInputReducers from './filter-input/reducers';
import { reducers as modalContainerReducers } from './modal-container';

// import _debug from './debug'; const debug = _debug('reducers');

export default concatenateReducers([
    autoSaveFieldReducers,
    filterableListReducers,
    filterInputReducers,
    modalContainerReducers
]);
