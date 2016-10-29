import React, { Component } from 'react';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: '',
      guess: '',
      displayMessage: ''
    };
  }

  generateRandoNum() {
    // let min = 0
    // let max = 10

    this.setState(
      {randomNum: (Math.floor(Math.random() * (0 - 10)) + 10)
      });
  }

  updateGuess(e) {
    this.setState(
      {guess: e.target.value}
    )
  }

  checkGuess() {
    if (this.state.guess > this.state.randomNum)
      {this.setState( {displayMessage:"Your guess is too high. Guess again."})}
    if (this.state.guess < this.state.randomNum)
    {this.setState( {displayMessage: "Your guess is too low. Guess again."})}
    if (this.state.guess == this.state.randomNum)
    {this.setState( {displayMessage: "You guessed correctly!"})}
  }

  guessSubmit() {
    this.checkGuess()
    this.clearField()
  }


  clearField() {
    document.getElementById('guessInput').value = ''
  }

  render() {
    return (
      <section className = 'container'>
        <section>
          <div>
            <button className='randonum-btn' onClick = {this.generateRandoNum.bind(this)}>Random Num</button>
          </div>
          <div>{this.state.randomNum}</div>
        </section>

        <section>
          <input id='guessInput' placeholder='Your best guess' onChange={this.updateGuess.bind(this)}></input>
          <button className='guess-btn' name='Guess' onClick={this.guessSubmit.bind(this)}>Guess</button>
          <div>Your last guess was {this.state.guess}</div>
          <div>{this.state.displayMessage}</div>
        </section>
      </section>
    );
  }
}
