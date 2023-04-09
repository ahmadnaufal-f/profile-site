import React, { useEffect } from "react";
import Header from "../header/header";
import Background from "../../component/background/background";
import Hero from "../hero/hero";
import About from "../about/about";
import Splash from "../splash/splash";
import Services from "../services/services";

function Main() {
    const [isShowingSplash, setIsShowingSplash] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowingSplash(false);
        }, 2000);
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
                    <Hero />
                    <About />
                    <Services />
                    {/* <Portfolio /> */}
                    {/* <Contact /> */}
                    {/* <Footer /> */}
                    <div style={{ height: "2000px" }}></div>
                </div>
            )}
        </>
    );
}

export default Main;
