/*
export function selectItem(listItem) {
    return {
        type: 'ITEM_CLICKED',
        payload: listItem
    };
}
*/

export function getItemFromProductList(id) {
    return{
        type: 'VIEW_PRODUCT',
        payload: id
    };
}

export function removeItemFromProductsList(id) {
    return{
        type: 'REMOVE_PRODUCT_FROM_LIST',
        payload: id
    };
}

export function addItemToProductsList(product) {
    return{
        type: 'ADD_PRODUCT_TO_LIST',
        payload: product
    };
}

export function addProductsToProductsList(products) {
    return{
        type: 'ADD_PRODUCTS_TO_LIST',
        payload: products
    };
}