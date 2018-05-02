import React, { Component } from 'react';
import CatalogueHeadings from './CatalogueHeadings';
import SongDetails from './SongDetails';

class Catalogue extends Component {
  render() {
    return (
      <table>
        <CatalogueHeadings />
        <SongDetails />
      </table>
    )
  }
}

export default Catalogue;