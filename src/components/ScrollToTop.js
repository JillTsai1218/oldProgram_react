import React, { useState, useEffect } from "react";
import gotop from './../images/gotop.png';
import './../css/program_master.css';

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    let ad_img = 'ad_img';
    return (
        <div id="back">
            {showTopBtn && (<div onClick={goToTop} id="back-img1"><img rel="preload" src={gotop} alt={ad_img}/></div>)}
        </div>
    );

};
export default ScrollToTop;