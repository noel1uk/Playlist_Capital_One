import React, { Component } from 'react';
import YearButton from './YearButton';

class YearButtonContainer extends Component {
  buttons = props => {
    const buttons = [];
    const music = props;
    if(music !== undefined){
      music.forEach((song) => {
        buttons.push(<YearButton 
          year={song.year}
          key={song.key}
        />);
      })
    }
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