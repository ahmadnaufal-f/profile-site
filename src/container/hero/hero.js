import "./hero.scss";
import React from "react";
import hero from "../../assets/images/hero.jpg";

function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-card cards glass">
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
        </section>
    );
}

export default Hero;
