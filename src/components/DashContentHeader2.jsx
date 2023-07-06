import React from 'react';
import {BsFillGrid3X2GapFill} from "react-icons/bs";
import {HiOutlineViewList} from "react-icons/hi";
import {BiSolidCheckCircle} from "react-icons/bi";
import {headerIcons} from "../hooks/Data.jsx";
const DashContentHeader2 = () => {
    return (
        <>
            <div className="dash-content-header2">
                <div className="header2-logo">
                    <button><BiSolidCheckCircle/></button>
                    <p>Select All</p>
                </div>
                <div className="header-2-items">
                    {headerIcons.map((element)=>{
                        const {name,icons,id} = element;
                        return(
                            <div key={id}>
                                <span>{icons}</span>
                                <button>{name}</button>
                            </div>
                        )
                    })}

                </div>
                <div className="header-2-btns">
                    <button><HiOutlineViewList/></button>
                    <button><BsFillGrid3X2GapFill/></button>
                </div>
            </div>
        </>
    )

}

export default DashContentHeader2;