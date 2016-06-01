import { combineReducers } from 'redux'
import status from './status'
import dashboard from './dashboard';
import users from './users';
import events from './event';

export default combineReducers({
  status,
  dashboard,
  users,
  events,
})

