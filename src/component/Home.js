import { useCallback, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, sortProduct } from "../actions";
import Loader from "./Loader";
import DisplayProduct from "./DisplayProduct";
import '../assets/css/Home.css'

const Home = () => {

    const [category,setcategory] = useState(['All']);
    const [limit, setlimit] = useState(4);
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.products.array);

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);
    
    const sort = value => {
        if(!category.includes((' > '+value))) {
            setcategory([...category,(' > '+value)]);
            dispatch(sortProduct(value));
        }
    }
    
    const clearSort = () => {
        setcategory(['All']);
        setlimit(4);
        dispatch(fetchProduct());
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
            <div className="wrapper">
                <div className='available-products'>
                    <h2>Available Products</h2>
                    <div className="sort">
                        <span>{category.map(catg => catg)}</span>
                        <button onClick={() => clearSort()}>Clear Sort</button>
                    </div>
                </div>
                <ul className='products'>
                    {getProducts.length < 1 ? <div className="loader-wrapper"><Loader /></div> : getProducts.map((product,key) => {
                        if(key < limit) {
                            if(limit === key+1) {
                                return <li ref={lastProductRef} key={key}><DisplayProduct product={product} sortValue={(value) => sort(value)} /></li>
                            }
                            return <li key={key}><DisplayProduct product={product} sortValue={(value) => sort(value)} /></li>
                        }  
                        return null
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Home;