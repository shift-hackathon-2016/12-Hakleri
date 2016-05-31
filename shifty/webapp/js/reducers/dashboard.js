import { combineReducers } from 'redux'
import types from '../action-types'
import status from './status'

const appLoadingDefault = true

function dashboard(state = {
	isFetching: false,
	talks: [
    {
      name: 'test',
      meta: 'test meta',
      start_time: '11:00',
    }, {
      name: 'test1',
      meta: 'test 1 meta',
      start_time: '12:00',
    }
  ],
	challenges: [{
      name: 'hackathon',
      meta: 'Coding challenge',
      start_time: '10:00',
    }],
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

