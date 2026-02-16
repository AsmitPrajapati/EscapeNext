import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Styles from './summary.module.css';

function Summary() {

    const billingDetails = [
        { label: "Hotel Fare", value: 180 },
        { label: "Hotel Taxes", value: 46 },
        { label: "Services", value: 46 },
        { label: "Discount", value: -15, isDiscount: true }
    ];

    return (
        <div className={Styles.container}>
            <h1 className={Styles.header}>Price Summary</h1>
            <div className={Styles.coupon}>
                <h1 className={Styles.title}>Coupon Codes</h1>
                <p className={Styles.text}>No coupon codes applicable for this property.</p>
                <div className={Styles.applyCoupon}>
                    <input className={Styles.input} type='text' placeholder='Have a Coupon Code'/>
                    <div className={Styles.enterBtn}><FaArrowRightLong color='#FFFFFF' height={16} width={10}/></div>
                </div>
            </div> 
            <div className={Styles.bill}>
                {billingDetails.map((data,index)=>(
                    <div key={index} className={Styles.billItem}>
                        <span>{data.label}</span>
                        <span>{data.value}</span>
                    </div>
                ))}
            </div>
            <button className={Styles.payBtn}>Pay Now</button>
        </div>
    )
}
export default Summary;