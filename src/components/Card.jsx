import React from 'react';

const Card = ({image,name,price}) => {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <input type="radio"/>
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