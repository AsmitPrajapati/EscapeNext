import React from "react";
import styles from "./properties.module.css";
import PropertyCard from "../PropertyCard/propertyCard";

function Property(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <PropertyCard size="a"/>
            </div>
            <div className={styles.right}>
                <div className={styles.rightUpper}>
                    <PropertyCard size="b"/>
                    <PropertyCard size="b"/>
                </div>
                <div className={styles.rightBottom}>
                    <PropertyCard size="b"/>
                    <PropertyCard size="b"/>
                </div>
            </div>
        </div>      
    )
}
export default Property;