import React, { Component } from 'react';

class YearButtonContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        { name: "2007" },
        { name: "2010" },
        { name: "2013" },
        { name: "2014" },
        { name: "2015" }
      ]
    };
  }
  render() {
    return (
      <div>
        <button>2007</button>
        <button>2010</button>
        <button>2013</button>
        <button>2014</button>
        <button>2015</button>
      </div>
    )
  }
}

export default YearButtonContainer;