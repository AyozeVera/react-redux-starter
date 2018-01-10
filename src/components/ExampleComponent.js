import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component {
  static get propTypes() {
    return {
      onBtnClick: PropTypes.func.isRequired,
      content: PropTypes.node,
    }
  }

  handleOnClick(event) {
    event.preventDefault()
    this.props.onBtnClick()
  }

  render() {
    return (
      <div>
        <h1>Example Component</h1>
        <button onClick={(event) => this.handleOnClick(event)}>Change my value! - {this.props.content ? this.props.content : ''}</button>
      </div>
    )
  }
}
