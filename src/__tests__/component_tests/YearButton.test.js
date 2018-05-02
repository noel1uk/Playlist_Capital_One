import React from 'react';
import { shallow } from 'enzyme';
import YearButton from '../../components/YearButton';

const year = shallow(<YearButton />);
it('renders correctly', () => {
  expect(year).toMatchSnapshot();
});
