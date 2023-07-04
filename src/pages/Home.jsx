import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Product from "../components/Product.jsx";

const Home = () => {
    return (
        <>
            <div className="glassmorphism">
                <div className={"navbar-center"}>
                    <Navbar/>
                </div>
                <div className="home-center">
                    <Hero/>
                    <Product/>
                </div>

            </div>
        </>
    )

}

export default Home;