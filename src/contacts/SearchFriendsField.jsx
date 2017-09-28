import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'
import {searchForContacts} from '../actions/contact_actions'
import {connect} from 'react-redux'

class SearchFriendsField extends Component {

  state = {
    query: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.queryForUsers(this.state)
    console.log('in submit')
  }

  render () {
    return (
      <Form className='search-field' onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Search for Contacts</label>
          <input placeholder='username' name='query' value={this.state.query} onChange={this.handleChange} />
        </Form.Field>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    queryForUsers: query => dispatch(searchForContacts(query))
  }
}

export default connect(null, mapDispatchToProps)(SearchFriendsField)
