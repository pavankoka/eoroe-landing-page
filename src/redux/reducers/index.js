import { combineReducers } from "redux";
import auth from 'redux/reducers/auth';
import posts from 'redux/reducers/posts';

export default combineReducers({
    auth,
    posts,
});