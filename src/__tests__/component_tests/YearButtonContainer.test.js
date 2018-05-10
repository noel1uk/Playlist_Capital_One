import React from 'react';
import { shallow } from 'enzyme';
import YearButtonContainer from '../../components/YearButtonContainer';

const years = shallow(<YearButtonContainer />);
const arr = [
  { name: "2007" },
  { name: "2010" },
  { name: "2013" },
  { name: "2014" },
  { name: "2015" }
];
it('renders correctly', () => {
  expect(years).toMatchSnapshot();
});

it('initializes state with an array of year objects', function() {
  expect(years.state().arr).toEqual(arr);
});
