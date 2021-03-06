import reduxConcatenateReducers from 'redux-concatenate-reducers';

import guardAction from './guard-action';

export default (definitions) => reduxConcatenateReducers(
    definitions.map((definition) => (definition && definition.actions && definition.reducer)
        ? guardAction(definition.actions, definition.reducer)
        : definition
    )
);
