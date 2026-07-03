import React from 'react';
import Styles from './bookingSearchBar.module.css';

function BookingSearchBar() {
  return (
    <div className={Styles.container}>
      <div className={Styles.info}>
        <h4 className={Styles.title}>Change Dates and Guest(s)</h4>
        <p className={Styles.subtext}>Check-in: 2 PM | Check-out: 12 PM</p>
      </div>

        <select className={Styles.select}>
            <option>Wed, 20 Aug 2025</option>
        </select>
        <select className={Styles.select}>
            <option>Thu, 21 Aug 2025</option>
        </select>
        <select className={Styles.select}>
            <option>2 Adults</option>
            <option>1 Adult</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
        </select>

        <button className={Styles.button}>Update Search</button>
      
    </div>
  );
}

export default BookingSearchBar;
