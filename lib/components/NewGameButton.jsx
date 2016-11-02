import React, { Component } from 'react';

export default class NewGameButton extends Component {

  render(){
    return(
      <button
        id="new-game-btn"
        disabled = {!this.props.displayMessage}
        onClick = {this.props.newGame}
      >
      New Game
      </button>
    )
  }
}
