import { combineReducers } from 'redux'
import types from '../action-types'
import eventTypes from '../containers/event/actionTypes';

const selectedEvent = (state, action) => action.type === types.SET_SELECTED_EVENT ? action.payload : [];


// event-detail page
const isLoaderVisibleDefault = false

function isLoaderVisible(state = isLoaderVisibleDefault, action) {
  if (action.type === eventTypes.showLoader) {
    return true
  } else if (action.type === eventTypes.hideLoader) {
  	return false
  }

  return state
}

export default combineReducers({
	selectedEvent,
	isLoaderVisible,
});
