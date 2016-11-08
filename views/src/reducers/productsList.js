var faker = require('faker');

let products = [];

const INITIAL_STATE = {all: products, item: null};

export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case 'VIEW_PRODUCT':

            var selectedProduct = products.find((product) => {
                if (product.id == action.payload) {
                    return product;
                }
            });

            return {...state, item: selectedProduct};

        case 'ADD_PRODUCT_TO_LIST':

            products.push(action.payload);

            return {...state, all:products};

        case 'ADD_PRODUCTS_TO_LIST':

            action.payload.forEach((productToAdd) => {
                let isItemAlreadyExists = false;
                products.forEach((existingProduct) => {
                    if(existingProduct.id == productToAdd.id){
                        isItemAlreadyExists = true;
                    }
                });

                if(!isItemAlreadyExists){
                    products.push(productToAdd);
                }
            });

            return {...state, all:products.slice()};

        case 'REMOVE_PRODUCT_FROM_LIST':

            for(let i = products.length - 1; i >= 0; i--) {
                if(products[i].id == action.payload) {
                    products.splice(i, 1);
                }
            }


            return {...state, all:products.slice()};
    }
    return state;
}
