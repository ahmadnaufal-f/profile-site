import React from "react";
import "./background.css";
import background from "../../assets/images/bg.svg";

export default function Background() {
    return (
        <div className="background-container">
            <div className="background-wrapper">
                <img src={background} alt="background" />
            </div>
        </div>
    );
}
