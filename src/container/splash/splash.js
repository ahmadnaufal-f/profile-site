import splashAnimation from "../../assets/lottie/loading.json";
import DisplayLottie from "../../component/lottie/lottie";
import "./splash.css";
import React from "react";

export default function Splash() {
    return (
        <div className="splash-container">
            <div className="splash-wrapper">
                <DisplayLottie animationData={splashAnimation} />
            </div>
        </div>
    );
}
