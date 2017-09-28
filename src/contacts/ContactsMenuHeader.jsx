import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddContactsModal from './AddContactsModal'
// import {Button, Modal} from 'semantic-ui-react'

class ContactsMenuHeader extends Component {

  render () {
    return (
      <div>
        <span>
          Contacts
        </span>
        <span><AddContactsModal /></span>
      </div>
    )
  }
}

export default ContactsMenuHeader
