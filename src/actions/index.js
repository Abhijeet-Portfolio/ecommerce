export const fetchProduct = () => {
    return async function (dispatch) {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(setProduct(data));
    }
}

export const setProduct = products => {
    return {
        type: 'SET_PRODUCT',
        payload: products
    }
}