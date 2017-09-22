import React, {Component} from 'react'
import {connect} from 'react-redux'
import ChatMenuHeader from './ChatMenuHeader'
import ChatList from './ChatList'

class ChatMenu extends Component {

  render () {
    return (
      <div>
        <ChatMenuHeader />
        <ChatList />
      </div>
    )
  }
}

export default ChatMenu
