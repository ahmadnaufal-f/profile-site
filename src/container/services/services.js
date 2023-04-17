import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBuilding, faShoppingCart, faChartLine, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import "./services.scss";
import { ReactComponent as Personal } from "../../assets/images/personal.svg";
import { ReactComponent as Company } from "../../assets/images/company.svg";
import { ReactComponent as Dashboard } from "../../assets/images/dashboard.svg";
import { ReactComponent as Ecommerce } from "../../assets/images/ecommerce.svg";
import { ReactComponent as Mobile } from "../../assets/images/mobile.svg";

function Services() {
    const items = [
        {
            title: "Personal Profile Website",
            icon: faUser,
            hue: 290,
            pic: <Personal />,
            description:
                "Maximize your personal brand with a stunning profile website! Showcase your skills, experience, and unique value proposition with a professional portfolio, resume, or blog. Say goodbye to outdated branding methods and hello to endless possibilities",
        },
        {
            title: "Company Profile Website",
            icon: faBuilding,
            hue: 189,
            pic: <Company />,
            description:
                "Elevate your company's branding with a sleek profile website! Showcase your company profile, products, and services, and make it easier for people to find and contact you. Create a lasting impression and attract more customers with us.",
        },
        {
            title: "E-Commerce Website",
            icon: faShoppingCart,
            hue: 97,
            pic: <Ecommerce />,
            description:
                "Reach more customers, sell products online, and boost revenue like never before. Unleash the full potential of your business and open new doors to growth and success with this powerful e-commerce platform!",
        },
        {
            title: "Company Dashboard",
            icon: faChartLine,
            hue: 28,
            pic: <Dashboard />,
            description:
                "Get ahead of the competition with a powerful dashboard website! Monitor your company's performance, make informed decisions, and increase productivity like never before. Say goodbye to guesswork and hello to data-driven success.",
        },
        {
            title: "Mobile App",
            icon: faMobileAlt,
            hue: 52,
            pic: <Mobile />,
            description:
                "Revolutionize your business with an advanced mobile app! With progressive web app technology, you can create a seamless e-commerce experience, dynamic company dashboard, or anything else you need to drive your business forward.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.screen.width >= 1024);

    useEffect(() => {
        const buttons = document.querySelectorAll(".accordion__item");
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const index = e.currentTarget.dataset.index;
                setActiveIndex(index);
            });
        });
    }, []);

    useEffect(() => {
        const contents = document.querySelectorAll(".accordion__content");
        contents.forEach((content) => {
            content.setAttribute("aria-hidden", true);
        });
        const activeContent = document.querySelector(`#panel${activeIndex}-content`);
        activeContent.setAttribute("aria-hidden", false);
        const items = document.querySelectorAll(".accordion__item");
        items.forEach((item) => {
            item.setAttribute("aria-expanded", false);
        });
        const activeItem = document.querySelector(`[data-index="${activeIndex}"]`);
        activeItem.setAttribute("aria-expanded", true);
    }, [activeIndex]);

    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width >= 1024) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            const items = document.querySelectorAll(".accordion__item");
            items.forEach((item) => {
                item.classList.add("glass");
            });
        } else {
            const items = document.querySelectorAll(".accordion__item");
            items.forEach((item) => {
                item.classList.remove("glass");
            });
        }
    }, [isDesktop]);

    return (
        <section className="cards services-container">
            <h2 className="services__title">My range of services</h2>
            <div className="accordion">
                {items.map((item, index) => {
                    return (
                        <div className="accordion__item " key={index} style={{ "--hue": item.hue }} data-index={index}>
                            <button className="accordion__heading" aria-expanded={index === activeIndex} aria-controls={`panel${index}-content`}>
                                <div className="accordion__icon">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <h3>{item.title}</h3>
                            </button>
                            <div className="accordion__content" id={`panel${index}-content`} aria-hidden={index !== activeIndex}>
                                <p>{item.description}</p>
                                <div className="accordion__pic">{item.pic}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;
