import React from "react";
import styles from "./propertyCard.module.css";
import LocIcon from "../../../../../public/assets/location.svg"
import Dubai from "../../../../../public/assets/dubai.jpg"

function PropertyCard({size="a"}){
    return(
        <div className={`${styles.card} ${size === "a" && styles.cardA} ${size === "b" && styles.cardB}`}>
            <div className={styles.cardImg}>
                <img className={styles.img} src={Dubai} alt="Dubai"/>
            </div>
            <div className={styles.content}>
                <div className={styles.place}>
                    <h1 className={styles.placeName}>Dubai</h1>
                </div>
                <div className={styles.details}>
                    <div className={styles.loc}>
                        <div className={styles.locImg}>
                            <img src={LocIcon} height="20px" width="14px" alt="Location icon"/>
                        </div>
                        <div className={styles.locPlace}>Bansko, Bulgaria</div>
                    </div>
                    <div className={styles.btn}>See more</div>
                </div>
            </div>
        </div>       
    )
}
export default PropertyCard;