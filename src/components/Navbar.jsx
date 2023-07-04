import React from 'react';
import {GrSearch} from 'react-icons/gr'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="navbar-logo">
                    <a href="">
                        <img src="/assets/logo%20icon.png" alt="logo" width={34.73} height={57.89}/>
                        <h1>BIZPUSH</h1>
                    </a>
                </div>
                <nav className="navbar">
                    <ul className={"navbar-list"}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>

                <div className="navbar-icons">
                    <span> <GrSearch/> </span>
                    <span className="cart-icon"><AiOutlineShoppingCart/> <button> 0 </button> </span>
                    <div className="profile">
                        <img src="/assets/profile.png" alt="profilepng" width={47} height={47}/>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Navbar;