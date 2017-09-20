import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './SideBar.css'

class SideBar extends Component {

  render () {
    return (
      <span className='sidebar'>
        <button>TOG</button>
        <Link to='/profile'><div>Prof</div></Link>
        <Link to='/chats'><div>Chats</div></Link>
        <Link to='/contacts'><div>Cont</div></Link>
        <Link to='/signout'><div>SO</div></Link>
      </span>
    )
  }
}

export default SideBar
