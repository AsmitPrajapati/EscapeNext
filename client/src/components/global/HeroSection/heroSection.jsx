import React from "react";
import styles from "./heroSection.module.css"
import Header from "../Header/header";



function HeroSection({heading,text,extracomponent}){
    return(
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <Header />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>{heading}</h1>
                    <p className={styles.text}>{text}</p>
                </div>
                <div className={styles.searchWrapper}>{extracomponent}</div>
            </div>
        </div>
    )
}
export default HeroSection;



