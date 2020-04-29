import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shop.data';

const ShopPage = () => {
  const [{ collections }, ] = useState({ collections: SHOP_DATA });
  return (
    <div className='shopPage'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} { ...otherCollectionProps} />
        ))
      }
    </div>
  );
}

export default ShopPage;
