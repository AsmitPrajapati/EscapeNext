import React from "react";
import styles from "./nextTrip.module.css";
import { IoLocationSharp } from "react-icons/io5";

function NextTrip(){
    return(
        <div className={styles.container}>
           <div className={styles.top}>
                <h1 className={styles.heading}>Get Inspiration For Your <span className={styles.highlight}>Next Trip</span></h1>
           </div>
           <div className={styles.bottom}>
                <div className={styles.content}>
                    <h1 className={styles.text}>Rest On Paradise Islands</h1>
                    <div className={styles.location}>
                        <div className={styles.icon}>
                            <IoLocationSharp style={{color: "white" ,height:"34px" ,width:"24px"}}   />
                        </div>
                        <div className={styles.place}>Bansko, Bulgaria</div>
                    </div>
                    <button className={styles.btn}>See more</button>
                </div>
            </div>
        </div>    
    )
}
export default NextTrip;