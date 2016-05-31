import { combineReducers } from 'redux'
import status from './status'
import dashboard from './dashboard';

export default combineReducers({
  status,
  dashboard,
})

