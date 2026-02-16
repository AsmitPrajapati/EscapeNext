import React from "react";
import Styles from "./checkboxFilter.module.css";

function CheckboxFilter({text}){
    return(
        // <div className={Styles.container}>
        //     <div className={Styles.box}></div>
        //     <p className={Styles.text}>{text}</p>
        // </div>
        <div className={Styles.container}>
            <input type="checkbox" className={Styles.box}/>
            <label className={Styles.text}>{text}</label>
        </div>
        
    )
}
export default CheckboxFilter;

