import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import './shop.styles.css';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shoppage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const collections = this.state.collections;
    return (
      <div>
        {collections.map(({ id, ...otherSectionProps }) => (
          <CollectionPreview key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Shoppage;
