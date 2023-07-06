import React from 'react';

const DashgraphCard = ({text1,text2,img}) => {
    return (
        <>
            <div className="card-graph-upper">
                <div className="card-graph-left">
                    <p>{text1}</p>
                    <h6>{text2}</h6>
                </div>
                <div className="card-graph-right">
                    <img src={img} alt="Chart" width={102} height={57}/>
                </div>
            </div>
        </>
    )

}

export default DashgraphCard;