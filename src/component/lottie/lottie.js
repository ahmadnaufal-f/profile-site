import React from "react";
import { useLottie } from "lottie-react";

// eslint-disable-next-line react/prop-types
export default function DisplayLottie({ animationData, loop, autoplay, lottieRef }) {
    const defaultOptions = {
        loop: loop !== undefined ? loop : true,
        autoplay: autoplay !== undefined ? autoplay : true,
        lottieRef: lottieRef,
        animationData: animationData,
    };
    const { View } = useLottie(defaultOptions);
    return <>{View}</>;
}
