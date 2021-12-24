import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, logout } from '../../actions';
import Login from '../Login';
import { LoginDiv, UserDiv } from './header.style';
import cart from '../../assets/images/Cart.svg';
import avatar from '../../assets/images/user-avatar.svg';
import './Header.css';

const Header = () => {

  const cartCount = useSelector(state => state.cart.array);
  const getProducts = useSelector(state => state.products.array);
  const loginData = useSelector(state => state.login);
  const [searchArray, setSearchArray] = useState([]);
  const [loginFormMadal, setLoginModal] = useState(false);
  const dispatch = useDispatch();

  const userlogin = {
    'fname': 'Abhijeet G',
    'username': 'abhijeet',
    'password': '12345678'
  }

  useEffect(() => {
    dispatch(fetchProduct());
    window.sessionStorage.setItem("users",JSON.stringify([userlogin]));
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
            <NavLink to='/cart' className='cart'>
              <div className='count'>{cartCount.length}</div>
              <img src={cart} alt="Cart" />
            </NavLink>
            <LoginDiv>
              {loginData.loginStatus ? <LoginData data={loginData.detail} userLogout={() => dispatch(logout())} /> : <button onClick={() => setLoginModal(true)}>login</button>}
            </LoginDiv>
          </nav>
          {loginFormMadal ? <Login close={() => setLoginModal(false)} /> : null}     
        </div>
      </header>
    </div>
  );
}

const LoginData = ({data,userLogout}) => {
  console.log(data);
  return (
    <div>
      <img src={avatar} alt={data.fname} />
      <UserDiv>
        <h3>Hi, {data.fname}</h3>
        <button onClick={userLogout}>LOGOUT</button>
      </UserDiv>
    </div>
  )
}

export default Header;
