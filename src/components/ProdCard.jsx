import {AiFillHeart, AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {useState} from "react";

const ProdCard = ({image, name, rating, price, discountPrice, favBtnHandler, id}) => {
    const [isFav, setIsFav] = useState(false)
    return (
        <>
            <div className="product-card">
                <div className="product-card-img">
                    <div className="product-img">
                        <div className={"btn-fav"} onClick={() => {
                            setIsFav(!isFav)
                            favBtnHandler(id)
                        }}>
                            {/* Toggle between favourite and  unfavored button*/}
                            {isFav ? <AiFillHeart/> : <AiOutlineHeart/>}
                        </div>
                        <img src={image} alt={name} width={204} height={204}/>
                    </div>
                </div>
                <div className="product-card-content">
                    <p className="product-reviews"><span> <AiFillStar/> </span> {rating}</p>
                    <h6>Nike Running shoe</h6>
                    <div className="price">
                        <div className="price-left">
                            <h2>{price}</h2>
                            <span>{discountPrice}</span>
                        </div>
                        <div className="price-right">
                            <button className="buy-now">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProdCard;