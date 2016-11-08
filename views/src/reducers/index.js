import { combineReducers } from 'redux';
import productList from './productsList';
import cart from './cart.js';


const rootReducer = combineReducers({
    productsList: productList,
    cartProductsList:cart
})

export default rootReducer;
