import React from 'react';
import { Key, BedDouble, Car, Utensils, Wrench } from "lucide-react";
import Styles from './hotelFacilities.module.css';

function HotelFacilities() {
     const amenities = [
        {
            icon: <Key size={18} color="#0071eb" />,
            title: "Access",
            items: [
                "24-7 Front Desk",
                "Express Check-in/out",
                "Intercom",
                "Non-smoking rooms",
                "Paid parking",
                "Private Check-in/out",
            ],
        },
        {
            icon: <BedDouble size={18} color="#0071eb" />,
            title: "Room amenities",
            items: [
                "Air-conditioned rooms",
                "Daily housekeeping",
                "Balcony/terrace",
                "Dustbins",
                "Fan",
                "First Aid kit",
                "Free drinking water",
                "Hand sanitiser",
                "Ironing facilities",
                "Telephone",
                "Television",
                "Safety Deposit Box",
            ],
        },
        {
            icon: <Car size={18} color="#0071eb" />,
            title: "Transfers and transport",
            items: [
                "Onsite car parking",
                "Airport transfer",
                "Taxi/Cab service",
                "Paid parking",
            ],
        },
        {
            icon: <Utensils size={18} color="#0071eb" />,
            title: "Food and drinks",
            items: [
                "Buffet Breakfast",
                "Room Service",
                "Bar",
                "BBQ Facility",
                "Alternative Meal Arrangement",
                "Coffee Shop",
                "Water Bottles",
            ],
        },
        {
            icon: <Wrench size={18} color="#0071eb" />,
            title: "Services and conveniences",
            items: [
                "Luggage Storage",
                "Laundry Service",
                "Contactless Check-in/Check-out",
                "Currency Exchange",
                "Dry-Cleaning",
                "Food Delivery",
                "Invoice Provided",
                "Library",
                "Smoke-Free Property",
                "Smoking Area",
                "Concierge",
                "Air conditioning in Public Area",
                "Free car parking",
                "Terrace",
            ],
        },
    ];

    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const columns = chunkArray(amenities, 2); // 2 items per column


    return (
        <div className={Styles.container}>
            <h1 className={Styles.header}>Hotel Facilities</h1>
            <div className={Styles.subContainer}>
                {columns.map((col, index) => (
                    <div key={index} className={Styles.column}>
                        {col.map((section, idx) => (
                            <div key={idx} className={Styles.section}>
                                <div className={Styles.sectionHeader}>
                                    {section.icon}
                                    <span className={Styles.title}>{section.title}</span>
                                </div>                         
                                {section.items.map((item, i) => (
                                    <p key={i} className={Styles.sectionItem}>{item}</p>
                                ))}
                            </div>  
                        ))}                    
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HotelFacilities;