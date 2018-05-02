import React from 'react';
import { shallow } from 'enzyme';
import Catalogue from '../../components/Catalogue';

const catalogue = shallow(<Catalogue />);
it('renders correctly', () => {
  expect(catalogue).toMatchSnapshot();
});

it('renders catalogue headings', () => {
  expect(catalogue.find('CatalogueHeadings').exists()).toBe(true)
});