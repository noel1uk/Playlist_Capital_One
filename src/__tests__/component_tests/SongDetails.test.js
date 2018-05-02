import React from 'react';
import { shallow } from 'enzyme';
import SongDetails from '../../components/SongDetails';

const song = shallow(<SongDetails />);
it('renders correctly', () => {
  expect(song).toMatchSnapshot();
});
