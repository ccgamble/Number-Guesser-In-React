import React, { Component } from 'react';

export default class MinInput extends Component {

  render(){
    return(
      <input
        id="minNum"
        placeholder="Min"
        onChange = {this.props.updateMin}
      >
      </input>
    )
  }
}
