import React from "react";
import styles from "./propertyType.module.css";
import LeftArrow from "../../../../../public/assets/LeftArrow.svg"
import RightArrow from "../../../../../public/assets/RightArrow.svg"
import Card from "../Card/card";

function PropertyType(){
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <p className={styles.heading}>
                    Browse By Property <span className={styles.highlight}>Type</span>
                </p>
                <div className={styles.arrows}>
                    <div className={styles.leftArrow}>
                        <img src={LeftArrow}/>
                    </div>
                    <div className={styles.rightArrow}>
                        <img src={RightArrow}/>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <Card size="sm" />
                <Card size="sm" />
                <Card size="sm" />
                <Card size="sm" />
                <Card size="sm" />
                <Card size="sm" />
                <Card size="sm" />
            </div>
        </div>       
    )
}
export default PropertyType;