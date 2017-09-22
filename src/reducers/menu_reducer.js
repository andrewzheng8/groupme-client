import {
  SET_ACTIVE_ITEM,
  TOGGLE_SLIDEOUT
} from '../actions/types'

export function menuReducer (state = {showSlideOut: true, activeItem: 'chats'}, action) {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return {...state, activeItem: action.payload}// {loading: false??, }
    case TOGGLE_SLIDEOUT:
      const slideoutState = state.showSlideOut
      return {...state, showSlideOut: !slideoutState}
    default:
      return state
  }
}
