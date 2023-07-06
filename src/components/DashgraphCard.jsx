import React from 'react';
import "../styles/DashGraphCard.css"
const DashgraphCard = ({text1,text2,img,btnText,text3,text4}) => {
    return (
        <>
            <div className="card-graph">
            <div className="card-graph-upper">
                <div className="card-graph-left">
                    <p>{text1}</p>
                    <h6>{text2}</h6>
                </div>
                <div className="card-graph-right">
                    <img src={img} alt="Chart" width={102} height={57}/>
                </div>
            </div>

            <div className="card-graph-down">
                <button>{btnText}</button>
                <p> <span></span> {text3}</p>
                <p> <span></span> {text4}</p>
            </div>
            </div>
        </>
    )

}

export default DashgraphCard;