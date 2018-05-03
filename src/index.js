import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const MUSIC = [
  {key: 1, year: '2007', title: 'One More Time', artist: 'Alison Moyet', album: 'The Turn'},
  {key: 2, year: '2007', title: 'Another Day', artist: 'Alison Moyet', album: 'The Turn'},
  {key: 3, year: '2010', title: 'Love Dance', artist: 'The Cure', album: 'Disintegration'},
  {key: 4, year: '2013', title: 'Taurus II', artist: 'Mike Oldfield', album: '5 Miles Out'},
  {key: 5, year: '2014', title: 'The Children Of Yarn', artist: 'T-Rex', album: 'T-Rex'},
  {key: 6, year: '2015', title: 'F4', artist: 'Spooky Tooth', album: 'The Island Years'},
  {key: 7, year: '2015', title: 'Face-off', artist: 'Spooky Tooth', album: 'The Island Years'}
];

render(
  <App music={MUSIC}/>, document.getElementById('root'));