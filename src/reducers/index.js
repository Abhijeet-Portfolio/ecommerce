import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    user: userReducer
})

export default allReducers;