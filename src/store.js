import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import IndexReducer from './reducers/index';

const InitState = {};

const store = createStore(
    IndexReducer,
    InitState,
    compose(applyMiddleware(thunk))    
);

export default store;