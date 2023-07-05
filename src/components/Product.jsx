import '../styles/producs.css'
import ProdCard from "./ProdCard.jsx";
import {popularProducts} from "../hooks/Data.jsx";


const Product = () => {

    const favHandler = (prodId)=>{
        console.log(prodId)
    }
    return (
        <>
            <div className="products">
                <h1>popular products</h1>
                <div className="product-card-wrapper">
                    {popularProducts.map((products)=>{
                        const {id} = products;
                        return(
                            <ProdCard {...products} key={id} favBtnHandler={favHandler}/>
                        )
                    })}
                </div>
            </div>
        </>
    )

}

export default Product;