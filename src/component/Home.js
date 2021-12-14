import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, sortProduct } from "../actions";
import DisplayProduct from "./DisplayProduct";
import '../assets/css/Home.css'

const Home = () => {

    const [category,setcategory] = useState(['All']);
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
        dispatch(fetchProduct());
    }

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
                    {getProducts.map((product,key) => (
                        <DisplayProduct key={key} product={product} sortValue={(value) => sort(value)} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Home;