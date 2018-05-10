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
        {this.state.arr.map((element, index) =>
          <button>
            {element.name}
          </button>
        )}
      </div>
    )
  }
}

export default YearButtonContainer;