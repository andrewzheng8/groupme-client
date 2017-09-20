import React, {Component} from 'react'
import {connect} from 'react-redux'

class ChatMenuHeader extends Component {

  render () {
    return {
      <div>
        <span>
          Chats
        </span>
        <span><button>Create Chat</button></span>
      </div>
    }
  }
}

export default ChatMenuHeader
