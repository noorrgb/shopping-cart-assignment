export function addProductToCart(product) {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    };
}

export function removeProductFromCart(id) {
    return{
        type: 'REMOVE_PRODUCT_FROM_CART',
        payload: id
    };
}

export function removeAllProductFromCart() {
    return{
        type: 'REMOVE_ALL_PRODUCTS_FROM_CART',
        payload: null
    };
}
