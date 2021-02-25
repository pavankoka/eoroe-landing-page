import { combineReducers } from "redux";
import auth from 'redux/reducers/auth';
import home from 'redux/reducers/home';

export default combineReducers({
    auth,
    home,
});