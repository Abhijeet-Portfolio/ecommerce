const initialState = {
    array: []
}

const userReducer = ( state = initialState, action = {}) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                array: [...state.array,action.payload]
            }
        default: 
            return state;
    }
}

export default userReducer;