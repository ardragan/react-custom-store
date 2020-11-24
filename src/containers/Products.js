import React, {useContext} from 'react';

import Product from '../components/Products/Product';
import {useStore} from '../hooks-store/store';
import './Products.css';
import {useSelector} from "react-redux";

const Products = () => {
    // const [state,] = useStore();

    const state = useSelector(state => state);

    return (
        <ul className="products-list">
            {state.products.map(prod => (
                <Product
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    isSelected={prod.isSelected}
                />
            ))}
        </ul>
    );
};

export default Products;
