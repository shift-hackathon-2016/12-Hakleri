import { createAction } from 'redux-actions'
import types from '../action-types'

export const changeAppLoadingState = createAction(types.APP_STATE_CHANGE)
export const setConferences = createAction(types.SET_CONFERENCES)
export const setUsers = createAction(types.SET_USERS)

export default {
  changeAppLoadingState,
  setConferences,
  setUsers,
}

