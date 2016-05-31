import { combineReducers } from 'redux'
import actions from '../action-types'
import status from './status'

const appLoadingDefault = true

function appLoading(state = appLoadingDefault, action) {
  console.log('received action')

  if (action.type === actions.APP_STATE_CHANGE) {
    return action.payload
  }

  return state
}

export default combineReducers({
  appLoading,
})

