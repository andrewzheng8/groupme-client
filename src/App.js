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

class App extends Component {

  componentDidMount () {
    var socket = io('http://localhost:8080')
    console.log(socket)
    this.props.fetchMessage()
  }

  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route path='/' component={Header} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signout' component={SignOut} />
          </div>
        </Router>
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

export default connect(null, mapDispatchToProps)(App)
