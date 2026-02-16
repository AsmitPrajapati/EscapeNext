import React from "react";
import styles from "./about.module.css";

import HeroSection from "../../components/global/HeroSection/heroSection";
import MidSection from "./components/MidSection/midSection";
import Footer from "../../components/global/Footer/footer";
import FooterStrip from "../../components/global/FooterStrip/footerStrip";


function About({text,type}){
    return(
        <div className={styles.about}>
        <HeroSection heading="ABOUT US" text="Laoreet sit amet cursus sit amet dictum sit amet justo." />
        <MidSection />
        <Footer />
        <FooterStrip />
        </div>
    )
}
export default About;
