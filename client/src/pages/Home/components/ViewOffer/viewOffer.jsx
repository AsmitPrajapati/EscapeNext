import React from "react";
import styles from "./viewOffer.module.css";
import ViewList from "../../../../components/global/ViewList/viewList";

function ViewOffer(){
    return(
        <div className={styles.container}>
            <p className={styles.text}>View All Offers</p>
            <ViewList />
        </div>
    )
}
export default ViewOffer;
