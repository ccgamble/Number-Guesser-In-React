import React, { Component } from 'react';

export default class GuessButton extends Component {

  render(){
    return(
      <button
        id="guess-btn"
        disabled = {!this.props.guess}
        onClick = {this.props.guessSubmit}
      >
      Guess
      </button>
    )
  }
}
