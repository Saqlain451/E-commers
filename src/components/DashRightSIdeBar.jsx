import React from 'react';
import "../styles/dashRightSide.css"
import DashgraphCard from "./DashgraphCard.jsx";
import {delivaryData, graphCardData} from "../hooks/Data.jsx";
import {BiDotsVerticalRounded} from "react-icons/bi";

const DashRightSIdeBar = () => {
    return (
        <>
            <div className="dashRightSideBar">
                <div className="dashboard-right-up">
                    {graphCardData.map((ele, id) => {
                        return (
                            <DashgraphCard {...ele} key={id}/>
                        )
                    })}

                </div>

                <div className="dashboard-right-down">
                    <div className="dashboard-right-down-card">
                        <div className="dashboard-right-down-upper">
                            <div>
                                <p>Actions</p>
                                <p>Orders</p>
                            </div>
                            <div>
                                <BiDotsVerticalRounded/>
                            </div>
                        </div>

                        <div className="dashboard-right-down-bottom">
                            {delivaryData.map((ele) => {
                                const {id, time, text1, text2} = ele;
                                return (
                                    <div key={id}>
                                        <button>{time}</button>
                                        <p>{text1}
                                            <span>{text2}</span>
                                        </p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default DashRightSIdeBar;