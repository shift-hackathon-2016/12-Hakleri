import { combineReducers } from 'redux'
import status from './status'
import dashboard from './dashboard';
import users from './users';

export default combineReducers({
  status,
  dashboard,
  users,
})

