import axios from 'axios'
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types'

const ROOT_URL = 'http://localhost:8080/api/v1'

export function signinUser ({ username, password }) {
  return function (dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { username, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        console.log('from server on login', response)
        dispatch({ type: AUTH_USER })
        // - Save the JWT token
        localStorage.setItem('token', response.data.token)
        // localStorage.setItem('userId', response.data.user._id)// change
        // dispatch({type: SET_VIEWER, payload: response.data.user})
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signupUser ({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        // localStorage.setItem('userId', response.data.user._id)
        // dispatch({type: SET_VIEWER, payload: response.data.user})// change
      })
      .catch(response => dispatch(authError(response.data.error)))
  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser () {
  localStorage.removeItem('token')
  // localStorage.removeItem('userId')
  return { type: UNAUTH_USER }
}

export function fetchMessage () {
  console.log('in fetch message')
  return function (dispatch) {
    console.log('in fetch dispatch function')
    axios.get('http://localhost:8080/', {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        console.log('in response to auth api')
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
      .catch(err => console.log('in catch', err))
  }
}
