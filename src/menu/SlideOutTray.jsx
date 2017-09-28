import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './SlideOutTray.css'
import ChatMenu from '../chat/ChatMenu'
import ContactsMenu from '../contacts/ContactsMenu'

class SlideOutNav extends Component {

  renderTrayComponents () {
    if (this.props.menu.activeItem === 'chats') {
      return <ChatMenu />
    }
    if (this.props.menu.activeItem === 'contacts') {
      return <ContactsMenu />
    }
  }

  render () {
    return (
      <span className='slide-out-tray'>
        <div>SlideOutNav Header</div>
        <div>SlideOutNav Search Bar</div>
        {this.renderTrayComponents()}
      </span>
    )
  }
}

const mapStateToProps = state => {
  return {menu: state.menu}
}

export default connect(mapStateToProps)(SlideOutNav)
