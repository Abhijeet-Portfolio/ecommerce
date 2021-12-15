const DisplayProduct = ({id,product,sortValue}) => {
    console.log(id);
    return (
        <li key={id}>
            <figure>
                <img src={product.image} alt={product.title} />
            </figure>
            <div>
                <h4>{product.title}</h4>
                <div>
                    <span>Category : </span> <button onClick={() => sortValue(product.category)}>{product.category}</button>
                </div>     
                <h5>&#8377; {product.price}</h5>
                <h6><span>Rating :</span> {product.rating.rate}</h6>
            </div>
        </li>
    )
}

export default DisplayProduct;