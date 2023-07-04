import '../styles/producs.css'

const Product = () => {
    return (
        <>
            <div className="products">
                <h1>popular products</h1>
                <div className="product-card-wrapper">
                    <div className="product-card">
                        <div className="product-card-img">
                            <div className="product-img" style={{background:"#f5ebee"}}>
                                <img src="/assets/popular-product-1.png" alt="" width={204} height={204}/>
                            </div>
                        </div>
                        <div className="product-card-content">
                            <p className="product-reviews">(11.6k Reviews)</p>
                            <h6>Nike Running shoe</h6>
                            <div className="price">
                                <div className="price-left">
                                    <h2>$100</h2>
                                    <span>500 Sold Out</span>
                                </div>
                                <div className="price-right">
                                    <button className="buy-now">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Product;