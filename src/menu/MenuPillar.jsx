import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './MenuPillar.css'
import {toggleSlideoutAction, setActiveItemAction} from '../actions/menu_actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class SideBar extends Component {

  handleItemClick = (e) => this.props.setActiveItem(e.target.name)

  test = () => console.log('itemCLicked')

  render () {
    return (
      <span className='menu-pillar'>
        <button onClick={this.props.toggleSlideout}>TOG</button>
        <Link to='/profile'><div>Prof</div></Link>
        {/* <div data-name='chats' className='nav-button' onClick={this.handleItemClick}>Chats</div> */}
        <button name='chats' onClick={this.handleItemClick}>Chats</button>
        <button name='contacts' className='nav-button' onClick={this.handleItemClick}>Cont</button>
        <Link to='/signout'><div>SO</div></Link>
      </span>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSlideout: () => dispatch(toggleSlideoutAction()),
    setActiveItem: itemName => dispatch(setActiveItemAction(itemName))
  }
}

export default connect(null, mapDispatchToProps)(SideBar)
