import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import io from 'socket.io-client'
import {fetchMessage} from './actions/auth_actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    var socket = io('http://localhost:8080')
    console.log(socket)
    this.props.fetchMessage()
  }

  render () {
    return (
      <div className='App'>
        <Router >
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
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
