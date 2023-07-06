// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../styles/hero.css"
import {AiFillStar} from 'react-icons/ai'
import {NavLink} from "react-router-dom";

const Hero = () => {
    return (
        <>

            <div className="glassmorphism-hero">
                <div className="hero-left">
                    <h1>Purchase your
                        <span> shoes</span> now.
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor
                        sit
                        morbi odio id. Aliquam ultricies tortor ac.
                    </p>

                   <NavLink to={"/dashboard"}><button>Shop Now</button></NavLink>

                    <img src="/assets/rating-hero.png" alt="rating hero" width={156} height={56}
                         className={"rating-hero"}/>
                    <img src="/assets/arrow.png" alt="arrow" width={257} height={167} className={"arrow"}/>
                </div>

                <div className="hero-right">
                    <img src="/assets/heroimg.png" alt="product-img" width={613} height={613}/>
                    <img src="/assets/Ellipse%2024.png" alt="ellipse" width={255} height={609}/>
                    <img src="/assets/Ellipse%2025.png" alt="ellipse" width={645} height={146}/>
                    <div className="box">
                        <AiFillStar/>
                    </div>
                    <div className="shadow"></div>
                    <div className="discount-parent">
                        <div className="discount">
                            <h6>Get Up to 30% Off</h6>
                            <p>You can get 30% off this product
                                if you are buying now
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero;