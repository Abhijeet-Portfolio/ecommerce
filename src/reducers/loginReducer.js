const initialState = {
    loginStatus: false,
    detail: {}
}

const loginReducer = ( state = initialState, action = {}) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                loginStatus: true,
                detail: action.payload
            }
        case 'LOGOUT':
            return {
                loginStatus: false,
                detail: {}
            }
        default: 
            return state;
    }
}

export default loginReducer;