import React from "react";
import { FaCircle } from "react-icons/fa";
import styles from "./hotelPolicies.module.css";

const HotelPolicies = () => {

  const hotelPolicies = [
    "Guest must be over 18 years of age to check-in to this hotel",
    "As per Government regulations, it is mandatory for all guests above 18 years of age to carry a valid photo identity card & address proof at the time of check-in. Please note that failure to abide by this can result with the hotel denying a check-in. Hotels normally do not provide any refund for such cancellations.",
    "The standard check-in and check-out times are 12 noon. Early check-in or late check-out is subject to hotel availability and may also be chargeable by the hotel. Any early check-in or late check-out request must be directed to and reconfirmed with the hotel directly.",
    "Failure to check-in to the hotel, will attract the full cost of stay or penalty as per the hotel cancellation policy.",
    "Hotels charge a compulsory Gala Dinner Supplement during Christmas, New Year’s eve or other special events and festivals like Diwali or Dusshera. These additional charges are not included in the booking amount and will be collected directly at the hotel.",
    "There might be seasonal variation in hotel tariff rates during Peak days, for example URS period in Ajmer or Lord Jagannath Rath Yatra in Puri, the room tariff differences if any will have to be borne and paid by the customer directly at the hotel, if the booking stay period falls during such dates.",
    "All additional charges other than the room charges and inclusions as mentioned in the booking voucher are to be borne and paid separately during check-out. Please make sure that you are aware of all such charges that may come as extras. Some of them can be WiFi costs, Mini Bar, Laundry Expenses, Telephone calls, Room Service, Snacks etc.",
    "Some hotels may have policies that do not allow unmarried / unrelated couples or certain foreign nationalities to check-in without the correct documentation. No refund will be applicable in case the hotel denies check-in under such circumstances. If you have any doubts on this, do call us for any assistance.",
    "Any changes or booking modifications are subject to availability and charges may apply as per the hotel policies."
];


  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <p className={styles.title}>Hotel Policies</p>
        <div className={styles.time}>
          <p>Check-in : 9:00 AM</p>
          <p>Check-out : 8:00 PM</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.policyTitle}>Property Policies</p>
        <div className={styles.policyList}>
          {hotelPolicies.map((hotelPolicies, index) => (
            <div key={index} className={styles.text}>
              <FaCircle size={6}  className={styles.bullet} />
              {hotelPolicies}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelPolicies;
