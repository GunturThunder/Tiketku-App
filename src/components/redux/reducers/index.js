import { combineReducers } from 'redux';
import hotels from './hotel'
import users from './users'

export default combineReducers({
    hotels,
    users
});