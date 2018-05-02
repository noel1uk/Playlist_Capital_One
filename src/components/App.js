import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, { Component } from 'react';
import YearButtonContainer from './YearButtonContainer';
Enzyme.configure({ adapter: new Adapter() });

class App extends Component {
  render() {
    return (
      <div>
        <YearButtonContainer />
      </div>
    )
  }
}

export default App;
