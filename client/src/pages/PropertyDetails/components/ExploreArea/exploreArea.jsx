import React from 'react';
import {ChevronDown } from "lucide-react";
import { IoLocationSharp } from "react-icons/io5";
import Styles from './exploreArea.module.css';

function ExploreArea({address="ambala"}) {
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
    
    const handleViewMap = () => {
        const mapUrl = "https://www.google.com/maps/@30.3705213,76.7913552,13z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";
        window.open(mapUrl, "_blank");
    };

    const nearbyPlaces = [
        { name: "Atlantis Watersport", distance: "0.133 km" },
        { name: "Shri Ram Hospital", distance: "0.133 km" },
        { name: "Menezes", distance: "0.133 km" },
        { name: "Beach Parking", distance: "0.133 km" },
        { name: "FlyingFish", distance: "0.133 km" },
    ];

  return (
    <div className={Styles.container}>
        <div className={Styles.header}>
            <h3 className={Styles.title}>Explore the Area</h3>
            <div className={Styles.address}>
                <p className={Styles.location}>
                    <IoLocationSharp /> 127, Calangute, Goa, 403516
                </p>
                <button className={Styles.mapButton} onClick={handleViewMap}>
                    View On Google Map
                </button>
            </div>
        </div>
        <div className={Styles.map}>
            <iframe
                title="location-map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            />
            <div className={Styles.nearBy}>
                <div className={Styles.place}>Around the property<ChevronDown color="#2289FF" strokeWidth={1.6} size={16}/></div>
                {nearbyPlaces.map((place, index) => (
                <p className={Styles.placeItem} key={index}>
                    <span>{place.name}</span><span>{place.distance}</span>
                </p>
                ))}
            </div>
        </div>
    </div>
  );
}
export default ExploreArea;
