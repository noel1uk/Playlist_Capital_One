import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import YearButtonContainer from '../../components/YearButtonContainer';

const app = shallow(<App />);
it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('renders a YearButtonContainer component', () => {
  expect(app.find('YearButtonContainer').exists()).toBe(true);
} )