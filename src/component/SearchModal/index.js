import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../actions";
import times from "../../assets/images/times-solid.svg";
import { AddBtn, ProductDetail, RemoveBtn, SearchModalWrapper } from "./searchModal.style";

const SearchModal = ({ data, close }) => {
  const cart = useSelector((state) => state.cart.array);
  const dispatch = useDispatch();

  return (
    <SearchModalWrapper>
      <img src={times} alt="Close" onClick={close} />
      <div>
        <figure>
          <img src={data.image} alt={data.title} />
        </figure>
        <ProductDetail>
          <li>{data.title}</li>
          <li>
            <span>Category</span> : {data.category}
          </li>
          <li>&#8377; {data.price}</li>
          <li>
            <h3>Rating: {data.rating.rate}</h3>
            {cart.includes(data.id) ? (
              <RemoveBtn onClick={() => dispatch(decrement(data.id))} >Remove</RemoveBtn>
            ) : (
              <AddBtn onClick={() => dispatch(increment(data.id))} >Add to Cart</AddBtn>
            )}
          </li>
        </ProductDetail>
      </div>
    </SearchModalWrapper>
  );
};

export default SearchModal;
