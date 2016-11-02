import React, { Component } from 'react';
import ClearButton from './ClearButton'
import GuessButton from './GuessButton'
import GuessInput from './GuessInput'
import MaxInput from './MaxInput'
import MinInput from './MinInput'
import NewGameButton from './NewGameButton'
import SubmitButton from './SubmitButton'



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
      {randomNum: (Math.floor(Math.random() * (max - min +1) + min))
      });
  }

  updateGuess(e) {
    let guessInput = parseInt(e.target.value)
    this.setState( {guess: guessInput} );
  }

  updateMin(e) {
    let minInput = parseInt(e.target.value)
    this.setState( {minNum: minInput});
  }

  updateMax(e) {
    let maxInput = parseInt(e.target.value)
    this.setState( {maxNum: maxInput});
  }

  checkGuess() {
    if (this.state.guess == this.state.randomNum) {
      this.winGame()
    } else if (this.state.maxNum >= this.state.guess && this.state.guess > this.state.randomNum) {
      this.setState( {displayMessage:"Your guess is too high. Guess again."});
    } else if (this.state.minNum <= this.state.guess && this.state.guess < this.state.randomNum) {
      this.setState( {displayMessage: "Your guess is too low. Guess again."});
    } else if (isNaN(this.state.guess) || this.state.guess === "") {
      this.setState( {displayMessage: "Your guess was not a number."});
    } else {
      this.setState( {displayMessage: "Your guess was not in range. Guess again."});
    }
  }

  winGame() {
    this.setState({
      minNum: (this.state.minNum - 10),
      maxNum: (this.state.maxNum + 10),
      guess: '',
      displayMessage: "You guessed correctly!"
    });
    document.getElementById('max-min').style.display = 'none';
    this.generateRandoNum()
    this.displayMinMax()
  }

  guessSubmit() {
    this.checkGuess();
    this.clearField();
  }

  submitBtnClick() {
    this.generateRandoNum();
    this.displayMinMax();
  }


  clearField() {
    document.getElementById('guessInput').value = '';
    document.getElementById('minNum').value = '';
    document.getElementById('maxNum').value = '';
  }

  displayMinMax() {
    document.getElementById('guess-range-message').style.display = 'block';
  }

  newGame() {
    this.setState({
    randomNum: '',
    guess: '',
    displayMessage: '',
    minNum: '',
    maxNum: ''
    });
    document.getElementById('max-min').style.display = 'block';
    document.getElementById('guess-range-message').style.display = 'none';
  }


  render() {
    return (
      <section className = 'container'>
      <h1>Number Guesser In React</h1>
        <section id='max-min'>
          <MinInput updateMin={this.updateMin.bind(this)} />
          <MaxInput updateMax={this.updateMax.bind(this)} />
          <SubmitButton minNum={this.state.minNum} maxNum={this.state.maxNum} submitBtnClick={this.submitBtnClick.bind(this)} />
        </section>

        <section>
          <div id='guess-range-message' hidden>Guess a number between {this.state.minNum} and {this.state.maxNum}</div>
          <GuessInput updateGuess={this.updateGuess.bind(this)} />
          <GuessButton guess={this.state.guess} guessSubmit= {this.guessSubmit.bind(this)} />
          <ClearButton guess={this.state.guess} clearField={this.clearField.bind(this)} />
          <div>{this.state.guess ? <p>Your last guess was {this.state.guess}</p> : <p></p>}</div>
          <div>{this.state.displayMessage}</div>
        </section>
        <NewGameButton displayMessage= {this.state.displayMessage} newGame= {this.newGame.bind(this)} />

      </section>
    );
  }
}
