import {SET_VIEWER, CLEAR_VIEWER} from './types'

export function setViewer (viewer) {
  return {type: SET_VIEWER, payload: viewer}
}

export function clearViewer () {
  return {type: CLEAR_VIEWER}
}
