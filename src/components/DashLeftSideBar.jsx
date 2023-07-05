import React from 'react';
import {FaCompass} from 'react-icons/fa'
import {AiFillStar, AiOutlinePlus} from 'react-icons/ai'
import {FaFacebookMessenger,FaArrowTrendUp} from 'react-icons/fa6'
import {IoEarthSharp} from "react-icons/io5";
import {BsBuildingsFill} from "react-icons/bs";
import "../styles/Dasleftside.css"
const DashLeftSideBar = () => {
    return (
        <>
            <div className="dashboard-left">
                <div className="dashboard-left-up">
                    <button className={"circle"}><FaCompass/></button>
                    <button className={"circle"}><AiFillStar/></button>
                    <div className="btn-messenger">
                        <span className="dot"></span>
                        <button className={"circle"}><FaFacebookMessenger/></button>
                    </div>
                    <button className={"circle"}><FaArrowTrendUp/></button>
                    <button className={"circle"}><IoEarthSharp/></button>
                    <button className={"circle"}><BsBuildingsFill/></button>
                </div>

                <div className="dashboard-down">
                    <button className={"circle"}><AiOutlinePlus/></button>
                    <div className="img-notification">
                        <span className="dot"></span>
                        <img src="/assets/sidebar-left-img1.png" alt="avatar1" width={50} height={50}/>
                    </div>
                    <img src="/assets/sidebar-left-img2.png" alt="avatar2" width={50} height={50}/>
                    <img src="/assets/sidebar-left-img3.png" alt="avatar3" width={50} height={50}/>
                    <img src="/assets/sidebar-left-img4.png" alt="avatar4" width={50} height={50}/>
                </div>
            </div>
        </>
    )

}

export default DashLeftSideBar;