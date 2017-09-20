import React, { Component } from 'react'

import './App.css'
import io from 'socket.io-client'

import {fetchMessage} from './actions/auth_actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route, withRouter, Switch} from 'react-router-dom'

import RequireAuth from './authentication/RequireAuth'

import Header from './Header'
import SignUp from './authentication/SignUp'
import SignIn from './authentication/SignIn'
import SignOut from './authentication/SignOut'
import MainPage from './main/MainPage'
import Home from './Home'

class App extends Component {

  componentDidMount () {
    var socket = io('http://localhost:8080')
    console.log(socket)
    console.log(this.context)
    this.props.fetchMessage()
  }

  render () {
    return (
      <div className='App'>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/landing' component={Header} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signout' component={SignOut} />
            <Route path='/' component={RequireAuth(MainPage)} />
          </Switch>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
