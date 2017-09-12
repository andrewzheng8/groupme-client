import React, {Component} from 'react'
import connect from 'react-redux'

class SignIn extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    <form id='signin-form'>
      <input type='text' name='username' />
      <input type='password' name='password' />
      <button type='submit'>
        Log In
      </button>
    </form>
  }
}
