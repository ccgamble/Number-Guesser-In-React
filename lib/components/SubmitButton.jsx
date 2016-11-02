import React, { Component } from 'react';

export default class SubmitButton extends Component {

  render(){
    return(
      <button
        id="numSubmit"
        disabled = {!this.props.minNum || !this.props.maxNum}
        onClick = {this.props.submitBtnClick}
      >
      Submit
      </button>
    )
  }
}
