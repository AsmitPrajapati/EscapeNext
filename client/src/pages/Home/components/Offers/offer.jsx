import React from "react";
import styles from "./offer.module.css";

function Offers(){
    return(
        <div className={styles.offerSection}>
            <div className={styles.offerHeader}>Exclusive Offers And Promotions <span className={styles.highlight}>Just For You!</span></div>
            <div className={styles.offerFilter}>
                <div className={styles.filterBtn1}>All</div>
                <div className={styles.filterBtn}>Hotels</div>
                <div className={styles.filterBtn}>Apartments</div>
                <div className={styles.filterBtn}>Resorts</div>
            </div>
        </div>
            
    )
}
export default Offers;