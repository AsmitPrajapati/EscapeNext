import React from "react";
import styles from "./registerBtn.module.css"
import { useNavigate } from "react-router-dom";

function RegBtn({onClick}){
    const navigate = useNavigate();
    return(
        <button className={styles.container} onClick={onClick}>
            Register
        </button>
    )
}
export default RegBtn;