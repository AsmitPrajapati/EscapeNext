import React from "react";
import styles from "./searchBar.module.css";
import Bed from "../../../../../public/assets/bed.svg"
import Calender from "../../../../../public/assets/calender.svg"
import Profileimg from "../../../../../public/assets/user.svg"
import Arrow from "../../../../../public/assets/arrows.svg"

function SearchBar(){
    return(
        <div className={styles.searchBar}>
            <div className={styles.place}>
                <input className={styles.input} type="text" placeholder="Where are you going"/>
                <img className={styles.img} src={Bed}/>
            </div>
            <div className={styles.dates}>
                <div className={styles.calImg}>
                    <img src={Calender} alt="calender Image"/>
                </div>
                <div className={styles.b}>Check-in</div>
                <div className={styles.hyphen}></div>
                <div className={styles.b}>Check-out</div>
            </div>
            <div className={styles.customer}>
                <div className={styles.profileImg}>
                    <img className={styles.img} src={Profileimg} alt="Profile Image"/>
                </div>
                <div className={styles.customerDetails}>
                    <div className={styles.text}>2 adults</div>
                    <div className={styles.dot}></div>
                    <div className={styles.text}>2 children</div>
                    <div className={styles.dot}></div>
                    <div className={styles.text}>1 room</div>
                </div>
                <div className={styles.arrow}>
                    <img  src={Arrow} alt="arrows"/>
                </div>
            </div>
            <button className={styles.searchBtn}>Search</button>
        </div>
    )
}
export default SearchBar;
