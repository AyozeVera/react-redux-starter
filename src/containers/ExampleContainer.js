import React, { Component } from 'react'
import { ExampleComponent } from '../components'
import { connect } from 'react-redux'

class ExampleContainer extends Component {
  render() {
    return (
      <ExampleComponent />
    )
  }
}

export default connect((state, props) => ({
  example: state.example,
}))(ExampleContainer)
