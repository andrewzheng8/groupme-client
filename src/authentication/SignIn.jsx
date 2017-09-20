import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signinUser} from '../actions/auth_actions'
import {bindActionCreators} from 'redux'

class SignIn extends Component {

  state = {
    username: '',
    password: ''
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    // console.log("updating signin", nextProps, this.context)
    if (this.props.authenticated) {
      this.context.router.history.push('/chats')
    }
  }

  componentWillUpdate(nextProps) {
    // console.log("updating signin", nextProps, this.context)
    if (nextProps.authenticated) {
      this.context.router.history.push('/chats')
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitting', this.state)
    this.props.signin(this.state)
  }

  render () {
    return (
      <form id='signin-form' className='auth-form' onSubmit={this.handleSubmit}>
        <input type='text' name='username' onChange={this.handleChange} />
        <br />
        <input type='password' name='password' onChange={this.handleChange} />
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
    {signin: signinUser}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
