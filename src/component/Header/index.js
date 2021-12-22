import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from '../../actions';
import cart from '../../assets/images/Cart.svg';
import './Header.css';

const Header = () => {

  const cartCount = useSelector(state => state.cart.array);
  const getProducts = useSelector(state => state.products.array);
  const [searchArray, setSearchArray] = useState([]);
  const dispatch = useDispatch();
  const userlogin = {
    'username': 'abhijeet',
    'password': '12345678'
  }

  useEffect(() => {
    dispatch(fetchProduct());
    window.sessionStorage.setItem("users",JSON.stringify(userlogin));
  },[]);

  const searchValue = value => {
    if (value === '') setSearchArray([]);
    else setSearchArray(getProducts.filter((product) => (product.category.includes(value) || product.title.includes(value.charAt(0).toUpperCase() + value.slice(1)))));
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>E-Commerce</h1>
          <nav>
            <div className="search">
              <form>
                <div className="form-group">
                  <input type="search" onChange={e => searchValue(e.target.value)}/>
                </div>
              </form>
              {searchArray.length !== 0 ? (
                <ul className="search-result">
                  {searchArray.map(product => <li key={product.id} onClick={() => console.log(product.id)}>{product.title}</li>)}
                </ul>
              ) : null}
            </div>
            <NavLink to='/' className="link">Products</NavLink>
            <NavLink to='/contact' className="link">Contact</NavLink>
            <div className='cart'>
              <div className='count'>{cartCount.length}</div>
              <img src={cart} alt="Cart" />
            </div>
            <button className='login'>login</button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
