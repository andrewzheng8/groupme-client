import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'

class Home extends Component {

  renderRedirects = (authenticated) => {
    if (authenticated) {
      return <Redirect to='/chats' />
    } else {
      return <Redirect to='/landing' />
    }
  }

  render () {
    return (
      <div>
        {this.renderRedirects(this.props.authenticated)}
        {/* <Route path='/landing' component={Header} />
        <Route path='/chats' component={RequireAuth(MainPage)} /> */}
      </div>

    )
  }
}

function mapStateToProps (state) {
  return { authenticated: state.auth.authenticated }
}

export default withRouter(connect(mapStateToProps)(Home))
