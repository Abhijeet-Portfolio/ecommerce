import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import cart from '../assets/images/Cart.svg';
import '../assets/css/App.css';

const App = () => {

  const cartCount = useSelector(state => state.cart.array);
  
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>E-Commerce</h1>
          <nav>
            <Link to='/' className='link'>Products</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <div>
              {cartCount.length > 0 ? <div className='count'>{cartCount.length}</div> : null}
              <img src={cart} alt="Cart" />
            </div>
          </nav>
        </div>
      </header>
      <main>
       
      </main>
    </div>
  );
}

export default App;
