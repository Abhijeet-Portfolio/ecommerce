import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const allReducers = combineReducers({
    products: productReducer,
    cart: cartReducer
})

export default allReducers;