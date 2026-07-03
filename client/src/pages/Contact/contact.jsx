import React from "react";

import HeroSection from "../../components/global/HeroSection/heroSection";
import Footer from "../../components/global/Footer/footer";
import FooterStrip from "../../components/global/FooterStrip/footerStrip";
import ContactSection from "./components/ContactSection/contactSection";

function Contact({text,type}){
    return(
        <div>
            <HeroSection heading="Contact Us" text="Laoreet sit amet cursus sit amet dictum sit ametjusto." />
            <ContactSection />
            <Footer />
            <FooterStrip />
        </div>
    )
}
export default Contact;
