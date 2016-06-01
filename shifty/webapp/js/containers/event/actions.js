import { createAction } from 'redux-actions'
import types from 'actionTypes'

export const changeEventFilter = createAction({type:types.dashboardChangeFilter})

export default {
  changeEventFilter,
}

