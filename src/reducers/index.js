import { combineReducers } from 'redux';

import UserReducer from './user-reducer';
import ErrorReducer from './error-reducer';

const IndexReducer = combineReducers({
    user: UserReducer,
    error: ErrorReducer
})
  
export default IndexReducer;