import React, { Component } from 'react'
import { ExampleComponent } from '../components'
import { connect } from 'react-redux'
import actions from '../actions'

class ExampleContainer extends Component {
  componentWillMount() {
    this.props.dispatch(actions.example.set('0'))
  }

  setContent() {
    let randomNumber = Math.floor((Math.random() * 100) + 1)
    this.props.dispatch(actions.example.set(randomNumber))
  }

  render() {
    return (
      <ExampleComponent
        onBtnClick={this.setContent.bind(this)}
        content= {this.props.example.content}
      />
    )
  }
}

export default connect((state, props) => ({
  example: state.example
}))(ExampleContainer)
