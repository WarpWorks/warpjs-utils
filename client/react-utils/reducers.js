import filterInputReducers from './filter-input/reducers';
import concatenateReducers from './concatenate-reducers';

export default concatenateReducers([
    filterInputReducers
]);
