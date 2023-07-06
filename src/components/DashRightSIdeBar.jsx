import React from 'react';
import "../styles/dashRightSide.css"
import DashgraphCard from "./DashgraphCard.jsx";

const DashRightSIdeBar = () => {
    return (
        <>
            <div className="dashRightSideBar">
                <div className="dashboard-right-up">
                    <div className="card-graph">
                        <DashgraphCard text1="Total Sales" text2="$281.90" img="/assets/Chart.svg"/>
                        <div className="card-graph-down">
                            <p>6 total orders</p>
                            <p>View report</p>
                        </div>
                    </div>
                    <div className="card-graph">
                        <DashgraphCard text1="Total Sessions" text2="456" img="/assets/Chart 2.svg"/>
                        <div className="card-graph-down">
                            <button>Live</button>
                            <p>6 total orders</p>
                            <p>View report</p>
                        </div>
                    </div>
                    <div className="card-graph">
                        <DashgraphCard text1="Customer rate" text2="5.43%" img="/assets/Chart 3.svg"/>
                        <div className="card-graph-down">
                            <p> <span></span> First Time</p>
                            <p> <span></span> Returning</p>
                        </div>
                    </div>
                </div>

                <div className="dashboard-right-down">

                </div>

            </div>
        </>
    )

}

export default DashRightSIdeBar;