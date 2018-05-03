import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const MUSIC = [
  {year: '2007', title: 'One More Time', artist: 'Alison Moyet', album: 'The Turn'},
  {year: '2007', title: 'Another Day', artist: 'Alison Moyet', album: 'The Turn'},
  {year: '2010', title: 'Love Dance', artist: 'The Cure', album: 'Disintegration'},
  {year: '2013', title: 'Taurus II', artist: 'Mike Oldfield', album: '5 Miles Out'},
  {year: '2014', title: 'The Children Of Yarn', artist: 'T-Rex', album: 'T-Rex'},
  {year: '2015', title: 'F4', artist: 'Spooky Tooth', album: 'The Island Years'},
  {year: '2015', title: 'Face-off', artist: 'Spooky Tooth', album: 'The Island Years'}
];

render(
  <App music={MUSIC}/>, document.getElementById('root'));