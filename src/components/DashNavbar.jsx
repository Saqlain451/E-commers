import {HiBars3} from 'react-icons/hi2'
import {PiDotsThreeBold} from 'react-icons/pi'
import {BiSearch} from 'react-icons/bi'
import {IoPersonCircle} from 'react-icons/io5'
import {IoIosNotifications} from 'react-icons/io'
import {MdCancel} from 'react-icons/md'
import "../styles/dashnavbar.css"
import {useState} from "react";
import {BsList} from "react-icons/bs";

const DashNavbar = () => {
    const [isActive, setIsActive] = useState(false);
    const btnClickHandler = () => {
        setIsActive(!isActive);
    }
    return (<>
        <div className={isActive ? "dashboard-navbar active" : "dashboard-navbar"}>
            <div className="navbar-logo">
                <a href="">
                    <button className={"circle"}><HiBars3/></button>
                    <h1>Constructor</h1>
                </a>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="">Dashboard</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">User Policy</a></li>
                    <li><a href="">Contacts</a></li>
                    <li><a href=""> <PiDotsThreeBold/></a></li>
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
                    <button className={"circle cancel-icon-dash"}><MdCancel/></button>
                    <button className={"circle bar-icon-dash"} onClick={btnClickHandler}>{isActive ? <MdCancel/> :
                        <BsList/>}
                    </button>
                </div>
            </div>

        </div>
    </>)

}

export default DashNavbar;