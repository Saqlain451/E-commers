import React, {useState} from 'react';
import {FaCircleCheck} from "react-icons/fa6";

const Card = ({image, name, price}) => {
    const [isCheck, setIsCheck] = useState(false)

    return (
        <>
            <div className="card">
                <div className="card-img">
                    <span onClick={() => setIsCheck(!isCheck)}>
                        {isCheck ? <div className="circle-check"><FaCircleCheck/></div> :
                            <div className="white-circle"></div>}
                    </span>
                    <img src={image} alt={name} width={180} height={150}/>
                </div>
                <div className="card-content">
                    <p>{name}</p>
                    <button>{price}</button>
                </div>
            </div>
        </>
    )

}

export default Card;