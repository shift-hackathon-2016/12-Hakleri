import { combineReducers } from 'redux'
import types from '../action-types'
import status from './status'

const appLoadingDefault = true

function dashboard(state = {
	isFetching: false,
	talks: [],
	challenges: [],
}, action) {
  if (action.type === types.requestConferenceDetails) {
    return Object.assign({}, state, {
      isFetching: true,
    });
  } else if (action.type === types.receivedConferenceDetails) {
	 return Object.assign({}, state, {
      isFetching: false,
      talks: action.payload.talks,
      challenges: action.payload.challenges,
    });
  }

  return state
}

export default combineReducers({
  dashboard,
})

