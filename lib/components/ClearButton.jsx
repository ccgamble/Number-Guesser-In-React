import React, { Component } from 'react';

export default class ClearButton extends Component {

  render(){
    return(
      <button
        id="clear-btn"
        disabled = {!this.props.guess}
        onClick = {this.props.clearField}
      >
      Clear
      </button>
    )
  }
}
