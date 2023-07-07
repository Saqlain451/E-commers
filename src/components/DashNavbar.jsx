import {HiBars3} from 'react-icons/hi2'
import {PiDotsThreeBold} from 'react-icons/pi'
import {BiSearch} from 'react-icons/bi'
import {IoPersonCircle} from 'react-icons/io5'
import {IoIosNotifications} from 'react-icons/io'
import {MdCancel} from 'react-icons/md'
import "../styles/dashnavbar.css"
import {useState} from "react";
import {NavLink} from "react-router-dom";

const DashNavbar = () => {
    const [isActive, setIsActive] = useState(false);
    const btnClickHandler = () => {
        setIsActive(!isActive);
    }
    return (<>
        <div className={isActive ? "dashboard-navbar active" : "dashboard-navbar"}>
            <div className="navbar-logo">
                <button className={"circle btn-bar-dash"} onClick={btnClickHandler}>{isActive ? <MdCancel/> :
                    <HiBars3/>}</button>
                <button className={"circle"} onClick={() => {
                    setIsActive(true)
                }}><HiBars3/></button>
                <NavLink to={"/"}>
                    <h1>Constructor</h1>
                </NavLink>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><NavLink to={"/"}>Dashboard</NavLink></li>
                    <li><NavLink to={"/"}>About Us</NavLink></li>
                    <li><NavLink to={"/"}>News</NavLink></li>
                    <li><NavLink to={"/"}>User Policy</NavLink></li>
                    <li><NavLink to={"/"}>Contacts</NavLink></li>
                    <li><NavLink to={"/"}> <PiDotsThreeBold/></NavLink></li>
                </ul>
            </nav>

            <div className="input-field">
                <span><BiSearch/></span>
                <input type="text" placeholder={"Search Transactions and Documents"}/>
            </div>


            <div className="nav-icons">
                <span className={"circle-search"}>
                    <button className={"circle"}><BiSearch/></button>
                </span>
                <div className="user">
                    <span><IoPersonCircle/></span>
                    <p>Clayton Santos</p>
                </div>
                <div className="navbar-btns">
                    <div className="notification-icons">
                        <span className={"dot"}></span>
                        <button className={"circle"}><IoIosNotifications/></button>
                    </div>
                    <button className={"circle cancel-icon-dash"} onClick={() => {
                        setIsActive(false)
                    }}><MdCancel/></button>
                </div>
            </div>

        </div>
    </>)

}

export default DashNavbar;