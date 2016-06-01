import { combineReducers } from 'redux'
import types from '../action-types'

const users = (state, action) => action.type === types.SET_USERS ? action.payload : []

export default {
	users,
}