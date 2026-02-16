import React from "react";
import styles from "./logo.module.css"
import Logo from "../../../../public/Assets/ESCAPENEXT.svg"

function MainLogo(){
    return(
        <div className={styles.container}>
            <img className={styles.image} src={Logo} alt="logo"/>
        </div>
    )
}
export default MainLogo;