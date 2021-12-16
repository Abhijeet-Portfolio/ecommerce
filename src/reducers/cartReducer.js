const initialState = {
    array: []
}

const cartReducer = ( state = initialState, action = {}) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                array: [...state.array,action.payload]
            }
        case 'DECREMENT':
            return {
                array: state.array.filter(element => element !== action.payload)
            }
        default: 
            return state;
    }
}

export default cartReducer;