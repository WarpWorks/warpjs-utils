import autoSaveFieldReducers from './auto-save-field/reducers';
import filterInputReducers from './filter-input/reducers';
import filterableListReducers from './filterable-list/reducers';
import concatenateReducers from './../concatenate-reducers';

export default concatenateReducers([
    autoSaveFieldReducers,
    filterableListReducers,
    filterInputReducers
]);
