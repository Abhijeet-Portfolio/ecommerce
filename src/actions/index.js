export const fetchProduct = () => {
    return async function (dispatch) {
        const response = await fetch(`https://fakestoreapi.com/products`);
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

export const sortProduct = category => {
    return {
        type: 'SORT',
        payload: category
    }
}

export const increment = value => {
    return {
        type: 'INCREMENT',
        payload: value
    }
}

export const decrement = value => {
    return {
        type: 'DECREMENT',
        payload: value
    }
}

export const addUser = value => {
    return {
        type: 'ADD_USER',
        payload: value
    }
}