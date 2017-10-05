import React, {Component} from 'react'
import {Item} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addFriend} from '../actions/contact_actions'

class ContactQueryResult extends Component {

  addAsFriend = () => {
    console.log('in addAsFriend callback')
    // const viewerId = this.props.viewer._id
    // const newFriendId = this.props.result._id
    this.props.addFriend(this.props.viewer, this.props.result)
  }

  render () {
    console.log(this.props.result)
    return (
      <Item>
        <span>{this.props.result.username}</span>
        <span><button onClick={this.addAsFriend} >Add</button></span>
      </Item>
    )
  }
}

const mapStateToProps = state => {
  return {
    viewer: state.viewer
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFriend: addFriend
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactQueryResult)
