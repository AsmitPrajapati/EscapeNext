import React from 'react';
import Styles from './hotelInfo.module.css';

function HotelInfo() {
  return (
    <div className={Styles.container}>
        <div className={Styles.info}>
            <h1 className={Styles.infoHeading}>Hotel Norrebro</h1>
            <p className={Styles.subInfo}>3-star hotel located in the heart of Copenhagen</p>
        </div>
        <div className={Styles.ratingInfo}>
            <span className={Styles.rating}>4.5/5</span>
            <span className={Styles.ratingText}>Excellent</span>
            <div className={Styles.review}>1980 review</div>
        </div>
    </div>
  );
}

export default HotelInfo;
