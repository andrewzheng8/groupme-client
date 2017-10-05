import React, {Component} from 'react'
import {Modal, Button, Form} from 'semantic-ui-react'
import SearchFriendsField from './SearchFriendsField'
import QueryResultsList from './QueryResultsList'

const AddContactsModal = () => {
  const modalCss = {height: '100%', width: '50%'}
  return (
    <Modal
      trigger={<button>Add Contact</button>}
      style={modalCss}
      >
      <Modal.Header>Search For and Add Contact</Modal.Header>
      <Modal.Content scrolling>
        <SearchFriendsField />
        <QueryResultsList />
      </Modal.Content>
    </Modal>
  )
}

export default AddContactsModal
// handle close function to clear query results
// make into a regular Component
// connect to store so results can be cleared
