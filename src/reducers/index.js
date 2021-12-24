import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    login: loginReducer
})

export default allReducers;