import {
  ADD_CONTACT,
  SEARCH_FOR_CONTACT,
  SEARCH_CONTACT_ERROR
} from '../actions/types'

export function contactsReducer (state = {queryResults: []}, action) {
  switch (action.type) {
    case SEARCH_FOR_CONTACT:
      return { ...state, error: '', queryResults: action.payload }
    case SEARCH_CONTACT_ERROR:
      return { ...state, error: action.payload}
    default:
      return state
  }
}
