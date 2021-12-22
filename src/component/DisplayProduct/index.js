import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../actions";

const DisplayProduct = ({ product, sortValue }) => {
  
  const cart = useSelector((state) => state.cart.array);
  const dispatch = useDispatch();

  return (
    <>
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div>
        <h4>{product.title}</h4>
        <div>
          <span>Category : </span>{" "}
          <button onClick={() => sortValue(product.category)}>
            {product.category}
          </button>
        </div>
        <h5>&#8377; {product.price}</h5>
        <div className="add-cart">
          <h6>Rating : {product.rating.rate}</h6>
          {cart.includes(product.id) ? (
            <button className="remove" onClick={() => dispatch(decrement(product.id))}>
              Remove
            </button>
          ) : (
            <button className="add" onClick={() => dispatch(increment(product.id))}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayProduct;
