import React, { Component } from 'react';

class YearButton extends Component {
  render() {
    const year = this.props.year
    return (
      <button>{year}</button>
    )
  }
}

export default YearButton;