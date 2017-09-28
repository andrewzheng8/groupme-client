import React from 'react'
import {connect} from 'react-redux'
import {Item} from 'semantic-ui-react'

const QueryResultsList = (props) => {
  const queryResults = props.queryResults ? props.queryResults.map((qR, index) => <Item key={`queryResult-${index}`} >{qR.username}</Item>) : null
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
