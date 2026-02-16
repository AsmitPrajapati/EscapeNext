import { useState } from "react";

import Navigation from "../../Navigation/navigation";
import MyProperties from "../../pages/My Properties/myProperties";
import BookingsPage from "../../pages/Booking/bookings";
import PropertyForm from "../Property Form/propertyForm";
import DashboardSidebar from "../../DashboardSidebar/dashboardSidebar";
import { useDashboardState } from "../../hooks/use-dashboard-state";
import styles from "./dashboard.module.css";
import BookingForm from "../../Booking Form/bookingForm";


export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("properties");
  const [selectedProperty, setSelectedProperty] = useState(null);
  // const { currentPage, setCurrentPage, selectedProperty, setSelectedProperty } = useDashboardState()

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.subContainer}>
        <DashboardSidebar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
        />
        <main className={styles.dashboardContent}>
          {currentPage === "properties" && (
            <MyProperties
              onSelectProperty={(id) => {
                setSelectedProperty(null);
                setCurrentPage("add-property");
              }}
            />
          )}
          {currentPage === "bookings" && <BookingsPage />}
          {currentPage === "bookingForm" && <BookingForm />}
          {currentPage === "add-property" && (
            <PropertyForm
              propertyId={selectedProperty}
              onBack={() => setCurrentPage("properties")}
            />
          )}

        </main>
      </div>
    </div>
  );
}


