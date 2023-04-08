import React, { useEffect, useRef } from "react";
import "./about.scss";
import Lottie from "lottie-react";
import programmer from "../../assets/lottie/programmer.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function About() {
    const lottieRef = useRef(null);
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    lottieRef.current.goToAndPlay(0, true);
                }
            });
        }, options);
        const target = document.querySelector(".about-container");
        observer.observe(target);
    }, []);

    return (
        <section className="cards about-container" data-height="300">
            <div className="about__illustration">
                <Lottie lottieRef={lottieRef} animationData={programmer} loop={false} autoPlay={false} />
            </div>
            <div className="about__text">
                <h2 className="about__title">A brief profile of myself</h2>
                <p className="about__description">
                    I am a passionate front-end developer with 2 years of experience in creating stunning and responsive websites. I reside in the vibrant city of West Jakarta, where I constantly seek inspiration from my surroundings to create
                    designs that not only look great but also provide an exceptional user experience
                </p>
                <a href="#about" className="about__button">
                    <span>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    <p>Dive deeper into my background</p>
                </a>
            </div>
        </section>
    );
}

export default About;
