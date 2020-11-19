import React, { useContext } from 'react';

import Product from '../components/Products/Product';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = props => {
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <Product
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
