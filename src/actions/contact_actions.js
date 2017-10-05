import axios from 'axios'
import {
  SEARCH_FOR_CONTACT,
  SEARCH_CONTACT_ERROR,
  ADD_FRIEND,
  ADD_FRIEND_ERROR
 } from './types'

const ROOT_URL = 'http://localhost:8080/api/v1'

export function searchForContacts ({query}) {
  return function (dispatch) {
    // Submit username/password to the server
    axios.get(`${ROOT_URL}/users/query/${query}`)
      .then(response => {
        dispatch({ type: SEARCH_FOR_CONTACT, payload: response.data})
      })
      .catch((error) => {
        // If request is bad...
        // - Show an error to the user
        dispatch(searchContactError(error.data))
      })
  }
}

function searchContactError (error) {
  return {
    type: SEARCH_CONTACT_ERROR,
    payload: error
  }
}

export function addFriend (viewer, contact) {
  return function (dispatch) {
    console.log('in addFriend action', contact)
    axios.post(`${ROOT_URL}/users/${viewer._id}/friends`, contact)
      .then(response => {
        dispatch({ type: ADD_FRIEND, payload: response.data})
      })
      .catch((error) => {
        // If request is bad...
        // - Show an error to the user
        dispatch(addFriendError(error.data))
      })
  }
}

function addFriendError (error) {
  return {
    type: ADD_FRIEND_ERROR,
    payload: error
  }
}
