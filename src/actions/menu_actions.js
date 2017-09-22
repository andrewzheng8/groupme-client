import {SET_ACTIVE_ITEM, TOGGLE_SLIDEOUT} from './types'

export const setActiveItemAction = itemName => {
  return {type: SET_ACTIVE_ITEM, payload: itemName}
}

export const toggleSlideoutAction = () => {
  // return dispatch => {
  //   dispatch({type: TOGGLE_SLIDEOUT})
  // }
  return {type: TOGGLE_SLIDEOUT}
}
