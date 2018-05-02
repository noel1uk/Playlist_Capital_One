import React from 'react';
import { shallow } from 'enzyme';
import YearButtonContainer from '../../components/YearButtonContainer';

const years = shallow(<YearButtonContainer />);
it('renders correctly', () => {
  expect(years).toMatchSnapshot();
});

it('renders a YearButton', () => {
  expect(years.find('YearButton').exists()).toBe(true);
});