import autoSaveFieldReducers from './auto-save-field/reducers';
import filterInputReducers from './filter-input/reducers';
import concatenateReducers from './../concatenate-reducers';

export default concatenateReducers([
    autoSaveFieldReducers,
    filterInputReducers
]);
