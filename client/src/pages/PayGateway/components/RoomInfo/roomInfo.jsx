import React from 'react';
import Styles from './roomInfo.module.css';

function RoomInfo() {
    const roomData = [
        {
            title: "Luxe Twin Room",
            offer: [
                "Enjoy complimentary 2 Pint(s) of Beer",
                "Enjoy Happy Hours with 1+1 offer",
                "20% off on Food & Beverage services",
                "10% Off on Laundry service",
                "Breakfast included",
                "Campaign Free Breakfast - Super Package",
                "Non-Refundable"
            ],
            link: "Cancellation policy details"
        },
        {
            title: "Luxe Twin Room",
            offer: [
                "Primary Guest should be atleast 18 years of age.",
                "Passport, Aadhaar and Driving License are accepted as ID proof(s)",
                "Pets are not allowed",
                "Unmarried couples allowed",
            ],
            link: "View more"
        },
    ];

    return (
        <div className={Styles.container}>
            {roomData.map((a,i)=>(
                <div key={i} className={`${Styles.left}  ${i === 0 ? Styles.active : Styles.inactive}`}>
                    <h1 className={Styles.title}>Luxe Twin Room <span >2 Adults</span></h1>
                    <ul className={Styles.services}>
                        {a.offer.map((f,i)=>(
                        <li key={i} className={Styles.service}>{f}</li>
                        ))}
                    </ul>
                    <p className={Styles.cancel}>{a.link}</p>
                </div>
            ))}
        </div>    
    )
};
export default RoomInfo;