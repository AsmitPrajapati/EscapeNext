"use client";

import styles from "./bookings.module.css";
import { useFormState } from "../../hooks/use-form-state";

export default function BookingsPage() {
  const bookings = [
    {
      id: "AB-387",
      customer: "Aarya Mehta",
      mail: "mehta01@gmail.",
      package: "Continental",
      booking: "Active",
      roomType: "Super Deluxe",
      arrive: "2025-11-03",
      payment: "Paid",
    },
    {
      id: "AB-388",
      customer: "Sofia D'Souza",
      mail: "sofia.dsouza.travel@gmail",
      package: "Vacation",
      booking: "Pending",
      roomType: "Single",
      arrive: "2025-12-15",
      payment: "Due",
    },
    {
      id: "AB-389",
      customer: "Rohan Kapoor",
      mail: "rohan.kapoor89@gmail",
      package: "Honeymoon",
      booking: "Active",
      roomType: "Double",
      arrive: "2025-09-28",
      payment: "Paid",
    },
    {
      id: "AB-399",
      customer: "Nisha Patel",
      mail: "nisha.patel.journey@gmail",
      package: "Honeymoon",
      booking: "Active",
      roomType: "Double",
      arrive: "2025-01-05",
      payment: "Paid",
    },
  ];

  return (
    <div className={styles.bookingsContainer}>
      <div className={styles.bookingsHeader}>
        <div className={styles.heading}>
          <h2>Bookings</h2>
          <p style={{ color: "#666" }}>You have total 2889 bookings.</p>
        </div>
        <div>

        </div>
      </div>

      <table className={styles.table}>
        <thead >
          <tr className={styles.tableHead}>
            <th className={styles.title}>ID</th>
            <th className={styles.title}>Customer</th>
            <th className={styles.title}>Package</th>
            <th className={styles.title}>Booking</th>
            <th className={styles.title}>Room Type</th>
            <th className={styles.title}>Arrive</th>
            <th className={styles.title}>Payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className={styles.tableRow}>
              <td className={styles.tableData}>{booking.id}</td>
              <td className={styles.tableData}>
                <span className={styles.name}>{booking.customer}</span>
                <span className={styles.mail}>{booking.mail}</span>
              </td>
              <td className={styles.tableData}>{booking.package}</td>
              <td className={styles.tableData}>
                <span
                  className={booking.booking === "Active" ? styles.active : styles.pending}
                >
                  {booking.booking}
                </span>
              </td>
              <td className={styles.tableData}>{booking.roomType}</td>
              <td className={styles.tableData}>{booking.arrive}</td>
              <td className={styles.tableData}>
                <span className={booking.payment === "Paid" ? styles.active : styles.pending}
                >
                  {booking.payment}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
