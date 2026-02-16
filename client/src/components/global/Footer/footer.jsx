import React from "react"
import styles from "./footer.module.css"
function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.subContainerLeft}>
                    <div className={styles.footerBrand}>
                        <h1 className={styles.footerTitle}>ESCAPENEXT</h1>
                        <p className={styles.footerText}>Find Your Perfect Place to Stay</p>
                    </div>
                    <div className={styles.footerColumn}>
                        <h1 className={styles.footerHeading}>About Us</h1>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerLink}>Explore</div>
                            <div className={styles.footerLink}>Destinations</div>
                            <div className={styles.footerLink}>Packages</div>
                            <div className={styles.footerLink}>Hotels</div>
                            <div className={styles.footerLink}>Flights</div>
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <h1 className={styles.footerHeading}>Contact Us</h1>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerLink}>FAQs</div>
                            <div className={styles.footerLink}>Terms</div>
                            <div className={styles.footerLink}>Privacy</div>
                            <div className={styles.footerLink}>Careers</div>
                            <div className={styles.footerLink}>Blog</div>
                        </div>
                    </div> 
                    <div className={styles.footerColumn}>
                        <h1 className={styles.footerHeading}>Support</h1>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerLink}>Affiliates</div>
                            <div className={styles.footerLink}>Sitemap</div>
                            <div className={styles.footerLink}>Social Media</div>
                            <div className={styles.footerLink}>Facebook</div>
                            <div className={styles.footerLink}>Twitter</div>
                        </div>
                    </div>  
                </div>
                <div className={styles.subContainerRight}>
                    <div className={styles.subscribe}>
                        <h1 className={styles.subscribeHeading}>Subscribe</h1>
                        <p className={styles.subscribeText}>Join our mailing list for the latest updates and promotions.</p>
                    </div>
                    <div className={styles.mail}>
                        <div className={styles.mailBox}>
                            <input  className={styles.mailInput} placeholder="Your email"/>
                            <div className={styles.mailBtn}>Contact</div>
                        </div>
                        <p className={styles.mailText}>By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
                
                
                
                
                