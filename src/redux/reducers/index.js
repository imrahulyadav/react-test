import { combineReducers } from 'redux';
import { PostReducer } from './PostReducer';

export const reducer = combineReducers({
    post: PostReducer
});