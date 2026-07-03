import React from 'react';
import Styles from './infoList.module.css';

function InfoList() {
  return (
    <div className={Styles.container}>
        <p className={Styles.listItem}>Overview</p>
        <p className={Styles.listItem}>Rooms</p>
        <p className={Styles.listItem}>Location</p>
        <p className={Styles.listItem}>Reviews</p>
        <p className={Styles.listItem}>Facilities</p>
        <p className={Styles.listItem}>Policies</p>
    </div>
  )
}

export default InfoList;