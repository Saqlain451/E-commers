import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
    return (
        <>
            <div className="glassmorphism">
                <div className={"navbar-center"}>
                    <Navbar/>
                </div>
                <div className="home-center">
                    <Hero/>
                </div>

            </div>
        </>
    )

}

export default Home;