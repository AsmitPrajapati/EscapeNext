import { useEffect, useState } from "react";
import { LayoutGrid } from "lucide-react";
import styles from "./DashboardSidebar.module.css";

function DashboardSidebar({ currentPage, onNavigate }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const isBookingPage =
    currentPage === "bookings" ||
    currentPage === "bookingForm";

  useEffect(() => {
    if (isBookingPage) {
      setOpenDropdown(true);
    } else {
      setOpenDropdown(false);
    }
  }, [isBookingPage]);


  return (
    <div className={styles.container}>

      <div
        onClick={() => onNavigate("properties")}
        className={`${styles.sidebarButton} ${
          currentPage === "properties" ? styles.active : ""
        }`}
      >
        <div
          className={`${styles.leftStrip} ${
            currentPage === "properties" ? styles.leftStripActive : ""
          }`}
        ></div>
        <LayoutGrid size={24} className={styles.icon} />
        <p className={styles.a}>My properties</p>
      </div>

      
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`${styles.sidebarButton} ${
          openDropdown || isBookingPage ? styles.active : ""
        }`}
      >
        <div
          className={`${styles.leftStrip} ${
            openDropdown || isBookingPage ? styles.leftStripActive : ""
          }`}
        ></div>
        <LayoutGrid size={24} className={styles.icon} />
        Bookings
      </button>

      
      {openDropdown && (
        <div className={styles.dropdownContainer}>
          <button
            onClick={() => onNavigate("bookings")}
            className={`${styles.dropdownItem} ${
              currentPage === "bookings" ? styles.activeDropdown : ""
            }`}
          >
            <div
              className={`${styles.leftStrip} ${
                currentPage === "bookings" ? styles.leftStripActive : ""
              }`}
            ></div>
            All Bookings
          </button>

          <button
            onClick={() => onNavigate("bookingForm")}
            className={`${styles.dropdownItem} ${
              currentPage === "bookingForm" ? styles.activeDropdown : ""
            }`}
          >
            <div
              className={`${styles.leftStrip} ${
                currentPage === "bookingForm" ? styles.leftStripActive : ""
              }`}
            ></div>
            Booking Form
          </button>
        </div>
      )}
    </div>
  );
}

export default DashboardSidebar;


