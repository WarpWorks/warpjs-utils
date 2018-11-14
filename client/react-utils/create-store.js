import clone from 'lodash/clone';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

// import debug from 'debug';
// const log = debug('W2:utils:react-utils/create-store');

export default (reducers, initialState = {}, middlewares = [], inDevelopment = false) => {
    const clonedMiddlewares = clone(middlewares);
    let composeEnhanders = compose;

    if (inDevelopment) {
        clonedMiddlewares.push(createLogger());

        if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    return createStore(reducers, initialState, composeEnhanders(applyMiddleware(...clonedMiddlewares)));
};
