const DisplayProduct = ({product,sortValue}) => {
    return (
        <>
            <figure>
                <img src={product.image} alt={product.title} />
            </figure>
            <div>
                <h4>{product.title}</h4>
                <div>
                    <span>Category : </span> <button onClick={() => sortValue(product.category)}>{product.category}</button>
                </div>     
                <h5>&#8377; {product.price}</h5>
                <h6>Rating : {product.rating.rate}</h6>
            </div>
        </>
    )
}

export default DisplayProduct;