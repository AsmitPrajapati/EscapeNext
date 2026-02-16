import React from 'react';
import {Check, Wifi} from "lucide-react"
import { CiBeerMugFull } from "react-icons/ci";
import Styles from './booking.module.css';

function Booking() {

    const features = [
        {
            icon: <Check size={14}/>,
            text: "Free Cancellation"
        },
        {
            icon: <Wifi size={14}/>,
            text: "Complimentary Wifi"
        },
        {
            icon: <Check size={14}/>,
            text: "Breakfast included"
        },
        {
            icon: <CiBeerMugFull size={14}/>,
            text: "Enjoy Complimentary 2 pint(s) of Beer"
        },
        {
            icon: <Check size={14}/>,
            text: "20% off on Food & Beverage services  "
        },
        {
            icon: <Check size={14}/>,
            text: "Free Cancellation till 24 hrs before check in"
        }
    ];

    const bookingDetails = [
        {
            variable: "Booking ID",
            value: "IDF-0228T36854388"
        },
        {
            variable: "Check-In",
            value: "Thursday 09 Jan 2026, from 12:00Pm"
        },
        {
            variable: "Check-Out",
            value: "Saturday, 11 Jan 2025, until 12:00 PM"
        },
        {
            variable: "Duration",
            value: "1 Night"
        },
        {
            variable: "Room Type",
            value: "2x Standard Room"
        }
    ];

    return (
        <div className={Styles.booking}>
            <div className={Styles.subContainer}>
                <div className={Styles.header}>
                    <div className={Styles.title}>Hotel Norrebro</div>
                    <div className={Styles.tag}>Couple Friendly</div>
                </div>
                <div className={Styles.bookingDetails}>
                    <div className={Styles.details}>
                        <h1 className={Styles.detailsTitle}>Booking Details</h1>
                        {bookingDetails.map((a,index)=>(
                            <div key={index} className={Styles.item}>
                                <span className={Styles.itemTitle}>{a.variable}</span>
                                <span className={Styles.itemValue}>{a.value}</span>
                            </div>
                        ))}                               
                    </div>
                    {features.map((feature, index) => (
                        <div key={index} className={index == 0 ? Styles.firstItem : Styles.feature}>{feature.icon}{feature.text}</div>
                    ))}  
                </div>
            </div>
        </div>
    )
}
export default Booking;