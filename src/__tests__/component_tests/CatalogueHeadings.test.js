import React from 'react';
import { shallow } from 'enzyme';

const headings = shallow(<CatalogueHeadings />);
it('renders correctly', () => {
  expect(headings).toMatchSnapshot();
});