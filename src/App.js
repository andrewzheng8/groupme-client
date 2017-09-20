import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import io from 'socket.io-client'
import {fetchMessage} from './actions/auth_actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Header from './Header'
import SignUp from './authentication/SignUp'
import SignIn from './authentication/SignIn'
import SignOut from './authentication/SignOut'
import PropTypes from 'prop-types'
import RequireAuth from './authentication/RequireAuth'
import MainPage from './main/MainPage'

class App extends Component {

  // componentWillMount () {
  //   // console.log("updating signin", nextProps, this.context)
  //   if (this.props.authenticated) {
  //     this.context.router.history.push('/chats')
  //   }
  // }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount () {
    var socket = io('http://localhost:8080')
    console.log(socket)
    console.log(this.props)
    this.props.fetchMessage()
  }

  // componentWillReceiveProps (nextProps) {
  //   console.log('receivedProps', nextProps)
  // }

  componentWillUpdate (nextProps) {
    console.log('in componenent will update', this.context)
    if (nextProps.authenticated) {
      this.context.router.history.push('/chats')
    } else {
      this.context.router.history.push('/landing')
    }
    console.log(nextProps, 'nextProps')
  }

  render () {
    return (
      <div className='App'>
          <Route path='/landing' component={Header} />
          <Route path='/chats' component={RequireAuth(MainPage)} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signout' component={SignOut} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {fetchMessage: fetchMessage},
    dispatch
  )
}

const mapStateToProps = state => {
  return {authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
