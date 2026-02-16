import React from "react";
import styles from "./footerStrip.module.css";
import Facebook from "../../../../public/assets/face-book.svg"
import Instagram from "../../../../public/assets/Instagram.svg"
import Twitter from "../../../../public/assets/twitter.svg"
import Linkedin from "../../../../public/assets/linkedin.svg"
import Youtube from "../../../../public/assets/youtube.svg"

function FooterStrip(){
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.copyright}>© 2023 Uponreturn. All rights reserved.</div>
                    <div className={styles.links}>
                        <div className={styles.link}>Privacy Policy</div>
                        <div className={styles.link}>Terms of Service</div>
                        <div className={styles.link}>Cookie Settings</div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.icons}>
                        <img className={styles.iconImage} src={Facebook}/>
                    </div>
                    <div className={styles.icons}>
                        <img className={styles.iconImage} src={Instagram}/>
                    </div>
                    <div className={styles.icons}>
                        <img className={styles.iconImage} src={Twitter}/>
                    </div>
                    <div className={styles.icons}>
                        <img className={styles.iconImage} src={Linkedin}/>
                    </div>
                    <div className={styles.icons}>
                        <img className={styles.iconImage} src={Youtube}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterStrip;
