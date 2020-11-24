import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/ShoppingList';

import {useDispatch} from "react-redux";
import {toggleFav} from './store/actions/products';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleFav);
    }, []);

    return (
        <React.Fragment>
            <Navigation/>
            <main>
                <Route path="/" component={ProductsPage} exact/>
                <Route path="/favorites" component={FavoritesPage}/>
            </main>
        </React.Fragment>
    );
};

export default App;
