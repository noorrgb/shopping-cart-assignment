import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ProductListItemDetailsView from './containers/ProductListItemDetailsView';
import CartView from './containers/CartView.js';


import Header from './components/header';
import Main from './components/main';

export default (
    <Router history={ browserHistory } >
        <Route path="/" component={Header}>
            <IndexRoute component={Main} />
            <Route path="products/:id" component={ProductListItemDetailsView} />
            <Route path="cart" component={CartView} />

        </Route>
    </Router>
)
