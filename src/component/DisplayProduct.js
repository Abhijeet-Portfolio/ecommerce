const DisplayProduct = ({key,product,sortValue}) => {
    return (
        <li key={key}>
            <figure>
                <img src={product.image} alt={product.title} />
            </figure>
            <div>
                <h4>{product.title}</h4>
                <div>
                    <span>Category : </span> <button>{product.category}</button>
                </div>     
                <h5>&#8377; {product.price}</h5>
                <h6><span>Rating :</span> {product.rating.rate}</h6>
            </div>
        </li>
    )
}

export default DisplayProduct;