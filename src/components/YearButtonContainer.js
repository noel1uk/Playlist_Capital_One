import React, { Component } from 'react';
import YearButton from './YearButton';

class YearButtonContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     age: 100
  //   };
  // }
  // buttons = props => {
  //   let buttons = [];
  //   const music = props;
  //   let uniqueYears = [];
  //   if(music !== undefined){
  //     music.forEach((song) => {
  //       if ( uniqueYears.includes(song.year) === false ) {
  //         uniqueYears.push(song.year);
  //       }
  //     })
  //   }
  //   uniqueYears.forEach((year) => {
  //     buttons.push(<YearButton 
  //       year={year}
  //       />);
  //   })
  //   // this.state = buttons;
  //   console.log(this.state);
  //   if ( this.state.age === 100 ) {
  //     this.setState({buttons})

  //   }
  //   // return buttons;
  // }
  render() {
    console.log(this);
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