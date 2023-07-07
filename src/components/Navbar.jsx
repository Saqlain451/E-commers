import React, {useEffect, useState} from 'react';
import {GrSearch} from 'react-icons/gr'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "../styles/navbar.css"
import {BsList} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {IoMdClose} from "react-icons/io";

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const btnClickHandler = () => {
        setIsShow(!isShow);
    }

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navbarStyle = {
        background: scrollPosition > 100 ? 'linear-gradient(104.58deg, #FFDCF3 2.1%, #D7FFFF 100.64%)' : 'transparent',
    };
    return (
        <>
            <div className={isShow ? "header show" : "header"} style={navbarStyle}>
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
                    <span className={"bar"} onClick={btnClickHandler}> {isShow? <IoMdClose/> : <BsList/>} </span>
                </div>
            </div>

        </>
    )

}

export default Navbar;