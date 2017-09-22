import React, {Component} from 'react'
import './SideBarContainer.css'
import MenuPillar from './MenuPillar'
import SlideOutTray from './SlideOutTray'
import {connect} from 'react-redux'

class SideBarContainer extends Component {

  renderSlideOutTray () {
    return this.props.menu && this.props.menu.showSlideOut ? <SlideOutTray /> : null
  }

  render () {
    return (
      <span className='sidebar-container'>
        <MenuPillar />
        {this.renderSlideOutTray()}
      </span>
    )
  }
}

const mapStateToProps = state => {
  return {menu: state.menu}
}

export default connect(mapStateToProps)(SideBarContainer)
