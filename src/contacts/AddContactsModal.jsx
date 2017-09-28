import React, {Component} from 'react'
import {Modal, Button, Form} from 'semantic-ui-react'
import SearchFriendsField from './SearchFriendsField'
import QueryResultsList from './QueryResultsList'

const AddContactsModal = () => {
  return (
    <Modal
      trigger={<Button>Add Contact</Button>}>
      <Modal.Header>Search For and Add Contact</Modal.Header>
      <Modal.Content scrolling>
        <SearchFriendsField />
        <QueryResultsList />
      </Modal.Content>
    </Modal>
  )
}

export default AddContactsModal
