import { combineReducers } from 'redux'
import actions from '../action-types'
import status from './status'

const appLoadingDefault = true

function dashboard(state = {
	isFetching: false,

}, action) {
  if (action.type === actions.requestConferenceDetails) {
    return action.payload
  }

  return state
}

export default combineReducers({
  appLoading,
})

