import React, { useEffect, useState } from "react";
import Styles from "./propertyList.module.css";
import Sidebar from "../Sidebar/sidebar";
import upDownIcon from "../../../../../public/assets/upDown.svg";
import PropertyCard from "../propertyCard/propertyCard";
import { BASE_URL } from "../../../../utils/constants";

function PropertyList(){
    
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/get`);
            const data = await res.json();
            setHotels(data.data); 
        } catch (err) {
            console.error(err);
        }
        };

        fetchHotels();
    }, []);

    return(
        <div className={Styles.container}>
            <div className={Styles.subContainer}>
                <div className={Styles.left}><Sidebar /></div>
                <div className={Styles.right}>
                    <div className={Styles.header}>
                        <h1 className={Styles.heading}><span className={Styles.highlight}>2785</span> Properties in Goa</h1>
                        <div className={Styles.upDown}>
                            <img src={upDownIcon} alt="upDownIcon" />
                        </div>
                    </div>
                    <div className={Styles.results}>
                        {hotels.length === 0 ? (
                            <p>No hotels found</p>
                            ) : (
                            hotels.map((hotel,index)=>(
                                <PropertyCard key={index} hotel={hotel}/> 
                            ))
                        )}
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default PropertyList;
