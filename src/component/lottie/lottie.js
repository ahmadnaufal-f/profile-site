import React from "react";
import { useLottie } from "lottie-react";

// eslint-disable-next-line react/prop-types
export default function DisplayLottie({ animationData }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    const { View } = useLottie(defaultOptions);
    return <>{View}</>;
}
