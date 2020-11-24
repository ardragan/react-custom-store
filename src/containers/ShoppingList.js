import React, {useContext} from 'react';

import AddProduct from '../components/Favorites/AddProduct';
import {useStore} from '../hooks-store/store';
import './Products.css';
import {useSelector} from "react-redux";

const ShoppingList = () => {
    // const state = useStore()[0];

    const state = useSelector(state => state);

    const favoriteProducts = state.products.filter(p => p.isSelected);

    let content = <p className="placeholder">Got no favorites yet!</p>;

    if (favoriteProducts.length > 0) {
        content = (
            <ul className="products-list">
                {favoriteProducts.map(prod => (
                    <AddProduct
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        description={prod.description}
                        qty={prod.qty}
                    />
                ))}
            </ul>
        );
    }
    return content;
};

export default ShoppingList;
