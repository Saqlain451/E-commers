import React, {useState} from 'react';
import {GrSearch} from 'react-icons/gr'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "../styles/navbar.css"
import {BsList} from "react-icons/bs";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    const btnClickHandler = ()=>{
        setIsShow(!isShow);
    }
    return (
        <>
            <div className={isShow? "header show" : "header"}>
                <div className="navbar-logo">
                    <NavLink to={"/"}>
                        <img src="/assets/logo%20icon.png" alt="logo" width={34.73} height={57.89}/>
                        <h1>BIZPUSH</h1>
                    </NavLink>
                </div>
                <nav className="navbar">
                    <ul className={"navbar-list"}>
                        <li><NavLink to={"/"} onClick={btnClickHandler}>Home</NavLink></li>
                        <li><NavLink to={"/"} onClick={btnClickHandler}>Gallery</NavLink></li>
                        <li><NavLink to={"/"} onClick={btnClickHandler}>Shop</NavLink></li>
                        <li><NavLink to={"/"} onClick={btnClickHandler}>Contact</NavLink></li>
                    </ul>
                </nav>

                <div className="navbar-icons">
                    <span> <GrSearch/> </span>
                    <span className="cart-icon"><AiOutlineShoppingCart/> <button> 0 </button> </span>
                    <div className="profile">
                        <img src="/assets/profile.png" alt="profilepng" width={47} height={47}/>
                    </div>
                    <span className={"bar"} onClick={btnClickHandler}><BsList/></span>
                </div>
            </div>

        </>
    )

}

export default Navbar;