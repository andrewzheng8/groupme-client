import {
  SET_VIEWER,
  CLEAR_VIEWER
} from '../actions/types'

export function viewerReducer (state = {_id: null, username: null}, action) {
  switch (action.type) {
    case SET_VIEWER:
      return {...state, _id: action.payload._id, username: action.payload.username}// {loading: false??, }
    case CLEAR_VIEWER:
      return {...state, _id: null, username: null}
    default:
      return state
  }
}
