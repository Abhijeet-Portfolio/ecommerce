import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../actions";
import DisplayProduct from "./DisplayProduct";
import '../assets/css/Home.css'

const Home = () => {

    
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.products.array);

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);
    

    return (
        <section className="home">
            <div className="wrapper">
                <div className='available-products'>
                    <h2>Available Products</h2>
                    <div className="sort">
                        
                        <button>Clear Sort</button>
                    </div>
                </div>
                <ul className='products'>
                    {getProducts.map((product,key) => (
                        <DisplayProduct key={key} product={product}  />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Home;