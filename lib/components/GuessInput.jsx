import React, { Component } from 'react';

export default class GuessInput extends Component {

  render(){
    return(
      <input
        id="guessInput"
        placeholder="Your best guess"
        onChange = {this.props.updateGuess}
      >
      </input>
    )
  }
}
