import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, { Component } from 'react';
import YearButtonContainer from './YearButtonContainer';
import Catalogue from './Catalogue';
Enzyme.configure({ adapter: new Adapter() });

class App extends Component {

  render() {
    return (
      <div>
        <YearButtonContainer music={this.props.music} />
        <Catalogue />
      </div>
    )
  }
}

export default App;
