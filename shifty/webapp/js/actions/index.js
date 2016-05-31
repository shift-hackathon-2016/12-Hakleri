import { createAction } from 'redux-actions'
import types from '../action-types'

export const changeAppLoadingState = createAction(types.APP_STATE_CHANGE)

export default {
  changeAppLoadingState,
}
