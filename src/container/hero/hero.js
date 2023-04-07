import "./hero.scss";
import React from "react";
import hero from "../../assets/images/hero.jpg";

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-card">
                <div className="hero__text">
                    <h2 className="hero__title">Hi, my name is</h2>
                    <h1 className="hero__name">Ahmad Naufal</h1>
                    <h3 className="hero__job">A web developer whose passion lies on both programming and designing</h3>
                    <button className="hero__button">Contact Me</button>
                </div>
                <div className="hero__picture">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
