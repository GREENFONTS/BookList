import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authorReducer from './authorReducer';

export default combineReducers({
    Books: bookReducer,
    Authors: authorReducer
})