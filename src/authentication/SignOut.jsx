import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {signoutUser} from '../actions/auth_actions'
import {Redirect} from 'react-router-dom'

class Signout extends Component {
  componentWillMount () {
    this.props.signoutUser()
  }

  render () {
    return (
      <div>
        <div>Sorry to see you go...</div>
        <Redirect to='/landing' />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signoutUser: signoutUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signout)
