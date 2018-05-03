import React, { Component } from 'react';
import YearButton from './YearButton';

class YearButtonContainer extends Component {
  buttons = props => {
    let buttons = [];
    const music = props;
    let uniqueYears = [];
    if(music !== undefined){
      music.forEach((song) => {
        if ( uniqueYears.includes(song.year) === false ) {
          uniqueYears.push(song.year);
        }
      })
    }
    uniqueYears.forEach((year) => {
      buttons.push(<YearButton 
        year={year}
        />);
    })

    return buttons;
  }
  render() {
    return (
      <div>
        {this.buttons(this.props.music)}
      </div>
    )
  }
}

export default YearButtonContainer;