import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Header extends Component {

  renderLinks = () => {
    if (this.props.auth.authenticated) {
      return (
        <span>
          <span>Welcome to GroupMe</span>
          <span className='auth-links'>
            <Link to='/signout'><span className='nav-link'>Sign Out</span></Link>
          </span>
        </span>

      )
    } else {
      return (
        <span className='auth-links'>
          <Link to='/signup'><span className='nav-link'>Sign Up</span></Link>
          <Link to='/signin'><span className='nav-link'>Sign In</span></Link>
        </span>

      )
    }
  }

  render () {
    return (
      <div className='App-header'>
        <Link to='/'><span className='nav-link'>Home</span></Link>
        {this.renderLinks()}
      </div>
    )
  }

}


function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header)
