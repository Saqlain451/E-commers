import React from 'react';
import "../styles/hero.css"
import {AiFillStar} from 'react-icons/ai'
const Hero = () => {
    return (
        <>

            <div className="glassmorphism-hero">
                <div className="hero-left">
                    <h1>Purchase your
                        <span> shoes</span> now.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor
                        sit
                        morbi odio id. Aliquam ultricies tortor ac.</p>
                    <button>Shop Now</button>
                </div>
                <div className="hero-right">
                    <img src="/assets/heroimg.png" alt="product-img" width={613} height={613}/>
                    <img src="/assets/Ellipse%2024.png" alt="ellipse" width={255} height={609}/>
                    <img src="/assets/Ellipse%2025.png" alt="ellipse" width={645} height={146}/>
                    <div className="box">
                        <AiFillStar/>
                    </div>
                    <div className="shadow">

                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero;