import React from 'react'
import {connect} from 'react-redux'
import {Item} from 'semantic-ui-react'
import ContactQueryResult from './ContactQueryResult'

const QueryResultsList = (props) => {
  const queryResults = props.queryResults ? props.queryResults.map((qR, index) => <ContactQueryResult result={qR} key={`queryResult-${index}`} />) : null
  return (
    <Item.Group>
      {queryResults}
    </Item.Group>
  )
}

const mapStateToProps = state => {
  return {queryResults: state.contacts.queryResults}
}

export default connect(mapStateToProps)(QueryResultsList)
