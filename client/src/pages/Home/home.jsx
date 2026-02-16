import React from "react";
import styles from "./home.module.css";
import HeroSection from "../../components/global/HeroSection/heroSection";
import SearchBar from "./components/SearchBar/searchBar";
import Offers from "./components/Offers/offer";
import Property from "./components/Properties/properties";
import ViewOffer from "./components/ViewOffer/viewOffer";
import Footer from "../../components/global/Footer/footer";
import FooterStrip from "../../components/global/FooterStrip/footerStrip";
import FavDestination from "./components/FavDestination/favDestination";
import ViewList from "../../components/global/ViewList/viewList";
import PropertyType from "./components/PropertyType/propertyType";
import NextTrip from "./components/NextTrip/nextTrip";
import AboutUs from "./components/AboutUs/aboutus";

function Home(){
    return(
        <div className={styles.home}>
            <HeroSection heading="TO THE WORLD OF AN INCREDIBLE  VACATION" text="Make Your Hassle-Free Travel Plans Now!" extracomponent={<SearchBar />}/>
            <Offers />
            <Property />
            <ViewOffer />
            <FavDestination />
            <div className={styles.list}>
                <ViewList />
            </div>
            <PropertyType />
            <div className={styles.list}>
                <ViewList />
            </div>
            <NextTrip />
            <AboutUs />
            <Footer />
            <FooterStrip />
        </div>
    )
}
export default Home;
