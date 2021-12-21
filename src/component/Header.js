import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import cart from '../assets/images/Cart.svg';
import '../assets/css/Header.css';

const Header = () => {

  const cartCount = useSelector(state => state.cart.array);
  
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>E-Commerce</h1>
          <nav>
            <NavLink to='/' className="link">Products</NavLink>
            <NavLink to='/contact' className="link">Contact</NavLink>
            <div>
              {cartCount.length > 0 ? <div className='count'>{cartCount.length}</div> : null}
              <img src={cart} alt="Cart" />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
