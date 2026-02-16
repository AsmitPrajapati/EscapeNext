import React from "react";
import styles from "./linkButton.module.css";



function LinkButton({text,Icon}){
    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={Icon}/>
            </div> 
            <div className={styles.text}>{text}</div>
        </div>
    )
}
export default LinkButton;