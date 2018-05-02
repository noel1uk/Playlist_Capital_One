import React from 'react';
import { shallow } from 'enzyme';
import Catalogue from '../../components/Catalogue';

const catalogue = shallow(<Catalogue />);
it('renders correctly', () => {
  expect(catalogue).toMatchSnapshot();
});