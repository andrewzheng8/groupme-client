import React, {Component} from 'react'
import {connect} from 'react-redux'
import ContactsMenuHeader from './ContactsMenuHeader'
import ContactsList from './ContactsList'

class ContactsMenu extends Component {

  render () {
    return (
      <div>
        <ContactsMenuHeader />
        <ContactsList />
      </div>
    )
  }
}

export default ContactsMenu
