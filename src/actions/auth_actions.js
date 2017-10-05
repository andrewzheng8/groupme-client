import axios from 'axios'
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types'
import {setViewer, clearViewer} from './viewer_actions'

const ROOT_URL = 'http://localhost:8080/api/v1'

export function signinUser ({ username, password }) {
  return function (dispatch) {
    // Submit username/password to the server
    axios.post(`${ROOT_URL}/signin`, { username, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        console.log('in signuser action', response)
        dispatch({ type: AUTH_USER })
        dispatch(setViewer(response.data.viewer))
        // - Save the JWT token
        localStorage.setItem('viewerId', response.data.viewer._id)
        localStorage.setItem('viewerUsername', response.data.viewer.username)
        localStorage.setItem('token', response.data.token)
        // localStorage.setItem('userId', response.data.user._id)// change
        // dispatch({type: SET_VIEWER, payload: response.data.user})
      })
      .catch(error => {
        // If request is bad...
        // - Show an error to the user
        console.log(error)
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signupUser ({ username, password }) {
  return function (dispatch) {
    console.log(username, password)
    axios.post(`${ROOT_URL}/signup`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        dispatch(setViewer(response.data.viewer))
        localStorage.setItem('viewerId', response.data.viewer._id)
        localStorage.setItem('viewerUsername', response.data.viewer.username)
        localStorage.setItem('token', response.data.token)
        // localStorage.setItem('userId', response.data.user._id)
        // dispatch({type: SET_VIEWER, payload: response.data.user})// change
      })
      .catch(response => {
        dispatch(authError(response.data.error))
      })
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
  localStorage.removeItem('viewerId')
  localStorage.removeItem('viewerUsername')
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
        if (response.data.authenticated) {
          dispatch({ type: AUTH_USER })
          const viewer = {_id: localStorage.getItem('viewerId'), username: localStorage.getItem('viewerUsername') }
          dispatch(setViewer(viewer))
        }
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
      .catch(err => console.log('in catch', err))
  }
}
