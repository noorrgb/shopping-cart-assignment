var faker = require('faker');

var cartProducts = [];


const INITIAL_STATE = {all: cartProducts};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {

        case 'ADD_PRODUCT_TO_CART':

            cartProducts.push(action.payload);

            return {...state, all:cartProducts.slice()};

        case 'REMOVE_PRODUCT_FROM_CART':

            for(let i = cartProducts.length - 1; i >= 0; i--) {
                if(cartProducts[i].id == action.payload) {
                    cartProducts.splice(i, 1);
                }
            }

            return {...state, all:cartProducts.slice()};

        case 'REMOVE_ALL_PRODUCTS_FROM_CART':

            return {...state, all:[]};
    }
    return state;
}
