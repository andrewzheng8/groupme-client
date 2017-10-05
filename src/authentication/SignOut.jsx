import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {signoutUser} from '../actions/auth_actions'
import {clearViewer} from '../actions/viewer_actions'
import {Redirect} from 'react-router-dom'

class Signout extends Component {
  componentWillMount () {
    this.props.signoutUser()
    this.props.clearViewer()
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
    signoutUser: signoutUser,
    clearViewer: clearViewer
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signout)
