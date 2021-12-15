import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const DisplayProduct = ({product,sortValue}) => {
    
    const [ status, setstatus] = useState(true);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(increment());
        setstatus(false);
    }

    const removeToCart = () => {
        dispatch(decrement());
        setstatus(true);
    }

    return (
        <>
            <figure>
                <img src={product.image} alt={product.title} />
            </figure>
            <div>
                <h4>{product.title}</h4>
                <div>
                    <span>Category : </span> <button onClick={() => sortValue(product.category)}>{product.category}</button>
                </div>     
                <h5>&#8377; {product.price}</h5>
                <div className="add-cart">
                    <h6>Rating : {product.rating.rate}</h6>
                    {status ? <button className="add" onClick={() => addToCart()}>Add to Cart</button> : <button className="remove" onClick={() => removeToCart()}>Remove</button>}
                </div>
                
            </div>
        </>
    )
}

export default DisplayProduct;