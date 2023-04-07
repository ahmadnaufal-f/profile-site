import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./header.scss";

function Header() {
    const [expanded, setExpanded] = useState(false);

    const onToggleFunction = () => {
        const burger = document.getElementById("hamburger");

        if (!expanded) {
            setExpanded(true);
            burger.classList.add("is-active");
        } else {
            setExpanded(false);
            burger.classList.remove("is-active");
        }
    };

    const linkProps = {
        className: "nav-link-socmed",
        "data-is-icon": "true",
        rel: "noreferrer",
        target: "_blank",
    };

    return (
        <Headroom>
            <nav className="navbar navbar-expand-md navbar-dark d-flex" aria-expanded={expanded}>
                <div className="navbar-logo">
                    <Logo />
                    <div className="logo-text">
                        <span className="logo-text-change">
                            <span className="logo-text-head">Ahmad</span>
                            <span className="logo-text-foot">© 2023</span>
                        </span>
                        <span className="logo-text-still">Naufal</span>
                    </div>
                </div>
                <div className="hamburger-wrapper">
                    <button id="hamburger" className="hamburger hamburger--spin" type="button" onClick={onToggleFunction}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className="navbar-links-wrapper">
                    <div className="navbar-links">
                        <a href="#home" className="nav-link">
                            Main Page
                        </a>
                        <a href="#about" className="nav-link">
                            About
                        </a>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                        <div className="nav-separator"></div>
                        <div className="nav-socmed-wrapper">
                            <a href="https://github.com/ahmadnaufal-f" {...linkProps}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/ahmad-naufal-firdaus-9a427a131/" {...linkProps}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://codepen.io/ahmadnaufal-f" {...linkProps}>
                                <FontAwesomeIcon icon={faCodepen} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </Headroom>
    );
}

export default Header;
