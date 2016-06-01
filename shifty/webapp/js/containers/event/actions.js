import { createAction } from 'redux-actions'
import types from './actionTypes'

export const changeEventFilter = createAction({type:types.dashboardChangeFilter})

export const showLoader = createAction({type: types.showLoader})

export const hideLoader = createAction({type: types.hideLoader})


export default {
  changeEventFilter,
  showLoader,
  hideLoader,
}

