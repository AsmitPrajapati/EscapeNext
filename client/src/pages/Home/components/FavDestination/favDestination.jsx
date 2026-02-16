import React from "react";
import styles from "./favDestination.module.css";
import Card from "../Card/card";

function FavDestination(){
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <p>Favorite Travel <span className={styles.highlighted}>Destinations</span></p>
            </div>
            <div className={styles.subContainer}>
                <Card size="md"/>
                <Card size="md"/>
                <Card size="md"/>
            </div>
        </div>    
    )
}
export default FavDestination;