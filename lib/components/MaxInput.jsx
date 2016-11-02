import React, { Component } from 'react';

export default class MaxInput extends Component {

  render(){
    return(
      <input
        id="maxNum"
        placeholder="Max"
        onChange = {this.props.updateMax}
      >
      </input>
    )
  }
}
