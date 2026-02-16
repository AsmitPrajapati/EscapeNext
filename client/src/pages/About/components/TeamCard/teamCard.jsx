                
import React from "react"
import styles from "./teamCard.module.css"
import quotes from "../../../../../public/Assets/quote.svg"
function TeamCard(){
    return(
        <div className={styles.card}>
            <div className={styles.profile}>
                <div className={styles.imgSection}></div>
                <h1 className={styles.name}>Roger Phillip</h1>
                <p className={styles.designation}>CEO</p>
            </div>
            <div className={styles.quotes}><img src={quotes} /></div>
            <div className={styles.discription}>
                Nor again is there anyone who loves or pursues
                or desires to obtain pain of itself, because it is pain,
                but because occasionally 
                circumstances occur in which toil and pain can procure
                him some great pleasure. To take a trivial example.
            </div>
        </div>
    
    )
}
export default TeamCard;
                
                
                
                
                