import React, { Component } from 'react';
import CatalogueHeadings from './CatalogueHeadings';
import SongDetails from './SongDetails';

class Catalogue extends Component {
  render() {
    return (
      <table>
        <tbody>
        <CatalogueHeadings />
        <SongDetails />
        </tbody>
      </table>
    )
  }
}

export default Catalogue;