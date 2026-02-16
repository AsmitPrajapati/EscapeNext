import { useState } from "react";
import styles from "./bookingForm.module.css";
import Personal from "../../pages/PayGateway/components/Personal/personal";

function BookingForm() {

  const onExport = () => {
    // Implement export functionality here
    console.log("Export button clicked");
  };

  const onAdd = () => {
    // Implement add booking functionality here
    console.log("Add button clicked");
  };
  return (
    <div className={styles.container}>

      <div className={styles.subContainer}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>Add Booking</h3>
          <p className={styles.subtitle}>
            You have total bookings.
            {/* {totalBookings}  */}
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.exportBtn} onClick={onExport}>
            Export
          </button>
          <button className={styles.addBtn} onClick={onAdd}>
            +
          </button>
        </div>
      </div>

      <Personal />
    </div>
  );
}

export default BookingForm;
