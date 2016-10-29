import React, { Component } from 'react';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: '',
      guess: '',
      displayMessage: '',
      minNum: '',
      maxNum: ''
    };
  }

  generateRandoNum() {
    let max = this.state.maxNum
    let min = this.state.minNum
    this.setState(
      {randomNum: (Math.floor(Math.random() * (max - min) + max))
      });
  }

  updateGuess(e) {
    this.setState( {guess: e.target.value} )
  }

  updateMin(e) {
    this.setState( {minNum: e.target.value})
  }

  updateMax(e) {
    this.setState( {maxNum: e.target.value})
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
    document.getElementById('minNum').value = ''
    document.getElementById('maxNum').value = ''
  }

  render() {
    return (
      <section className = 'container'>
        <section>
          <input id='minNum' placeholder='Min' onChange={this.updateMin.bind(this)}></input>
          <input id='maxNum' placeholder='Max' onChange={this.updateMax.bind(this)}></input>
        </section>
        <section>
          <div>
            <button className='randonum-btn' onClick = {this.generateRandoNum.bind(this)}>Random Num</button>
          </div>
          <div>{this.state.randomNum}</div>
        </section>

        <section>
          <input id='guessInput' placeholder='Your best guess' onChange={this.updateGuess.bind(this)}></input>
          <button className='guess-btn' name='Guess' onClick={this.guessSubmit.bind(this)}>Guess</button>
          <button className='clear-btn' onClick={this.clearField.bind(this)}>Clear</button>
          <div>Your last guess was {this.state.guess}</div>
          <div>{this.state.displayMessage}</div>
        </section>
      </section>
    );
  }
}
