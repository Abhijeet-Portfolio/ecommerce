import { useCallback, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../actions";
import Loader from "../Loader";
import DisplayProduct from "../DisplayProduct";
import ImageSlider from "../ImageSlider";
import './Home.css'

const Home = () => {

    const [productLists, setProductLists] = useState([]);
    const [limit, setlimit] = useState(4);
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.products.array);

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    useEffect(() => {
        setProductLists(getProducts);
    }, [getProducts]);
    
    const sortValue = value => {
        if(value === 'all') setProductLists(getProducts);
        else setProductLists(getProducts.filter(product => product.category === value));
    }

    const observer = useRef();
    const lastProductRef = useCallback(element => {
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setlimit(prevstate => prevstate + 4);
            }
        });
        if(element) observer.current.observe(element);
    },[])
    
    return (
        <section className="home">
            <ImageSlider />
            <div className="wrapper">
                <div className='available-products'>
                    <h2>Available Products</h2>
                    <div className="sort">
                        <select defaultValue='All' onChange={e => sortValue(e.target.value)}>
                            <option value="all">All</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                </div>
                <ul className='products'>
                    {productLists.length < 1 ? <div className="loader-wrapper"><Loader /></div> : productLists.map((product,key) => {
                        if(key < limit) {
                            if(limit === key+1) {
                                return <li ref={lastProductRef} key={key}><DisplayProduct product={product} /></li>
                            }
                            return <li key={key}><DisplayProduct product={product} /></li>
                        }  
                        return null
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Home;