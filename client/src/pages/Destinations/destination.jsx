import React from "react";


import HeroSection from "../../components/global/HeroSection/heroSection";
import Footer from "../../components/global/Footer/footer";
import FooterStrip from "../../components/global/FooterStrip/footerStrip";
import SearchBar from "../Home/components/SearchBar/searchBar";
import PropertyList from "./components/PropertyList/propertyList";


function Destination({text,type}){
    return(
        <div>
            <HeroSection heading="Explore Stunning Destinations" text="Find the perfect place to stay, from beachside villas to mountain escapes. Search by location, dates, and guest preferences — and start planning your next unforgettable trip." extracomponent={<SearchBar />}/>
            <PropertyList />
            <Footer />
            <FooterStrip />
        </div>
    )
}
export default Destination;
