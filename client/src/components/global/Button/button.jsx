import React from "react";
import styles from "./button.module.css";


function Btn({text,type}){
    return(
        <button className={styles.buttonContainer} type={type}>
            {text}
        </button>
    )
}
export default Btn;