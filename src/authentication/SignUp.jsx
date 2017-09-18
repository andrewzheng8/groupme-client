import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signupUser} from '../actions/auth_actions'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

class SignUp extends Component {

  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  static contextTypes = {
  router: PropTypes.object
}

componentWillMount() {
  // console.log("updating signin", nextProps, this.context)
  if (this.props.authenticated) {
    this.context.router.history.push('/')
  }
}

componentWillUpdate(nextProps) {
  // console.log("updating signin", nextProps, this.context)
  if (nextProps.authenticated) {
    this.context.router.history.push('/')
  }
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state)
  }

  showErrors = () => {

  }

  render () {
    return (
      <form id='signin-form' className='auth-form' onSubmit={this.handleSubmit}>
        <input type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          placeholder='Enter your username'
        />
        <br />
        <input type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          placeholder='Enter password'
        />
        <br />
        <input type='password'
          name='password_confirmation'
          value={this.state.password_confirmation}
          onChange={this.handleChange}
          placeholder='Confirm Password'
        />
        <br />
        <button type='submit'>
          Log In
        </button>
      </form>
    )

  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error, authenticated: state.auth.authenticated }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {signup: signupUser}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
