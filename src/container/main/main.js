import React, { useEffect } from "react";
import Header from "../header/header";
import Background from "../../component/background/background";
import Splash from "../splash/splash";

function Main() {
    const [isShowingSplash, setIsShowingSplash] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowingSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isShowingSplash ? (
                <Splash />
            ) : (
                <div className="main-container">
                    <Header />
                    <Background />
                    {/* <Hero />
                    <Skill />
                    <Service />
                    <Portfolio />
                    <Contact />
                    <Footer /> */}
                    <div style={{ height: "2000px" }}></div>
                </div>
            )}
        </>
    );
}

export default Main;
