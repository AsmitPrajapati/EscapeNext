
//  inventory

import { useFormState } from "../../hooks/use-form-state";
import { ROOM_STATUSES } from "../../lib/constants";
import styles from "./inventory.module.css";
import { useEffect } from "react";

import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";



export default function InventoryStep({ data, onValidityChange }) {
  useEffect(() => {
  onValidityChange(true);
}, []);


  return (
    <div className={styles.container}>
      
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Property Room Inventory</h2>
          <button className={styles.primaryBtn}>
            VIEW & MANAGE BOOKING
          </button>
        </div>

        {/* Room Info */}
        <div className={styles.roomInfo}>
          <div className={styles.imagePlaceholder}>
            Room Photo<br />Placeholder
          </div>

          <div className={styles.roomDetails}>
            <h3 className={styles.roomTitle}> {data.roomSetup.roomName}</h3>
            <p className={styles.roomSubTitle}>{data.roomDetails.roomType} : {data.roomDetails.bedType}, {data.roomDetails.roomSize}</p>
            <div className={styles.activeBadge}>
              <IoMdCheckmarkCircle size={15} color="#3E921C" />
              <p>Act</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <span><RiUserAddFill size={24} color="#000000"/></span>
            <span className={styles.statTitle}>Inventory</span>
            <span>
              <strong className={styles.big}>2</strong>
              <small className={styles.small}>/20</small>
            </span>
          </div>

          <div className={styles.statCard}>
            <span><RiUserAddFill size={24} color="#000000"/></span>
            <span className={styles.statTitle}>Max Guests</span>
            <span>
              <strong className={styles.big}>{data.occupancy.maxAdults}</strong>
              <small className={styles.small}>({data.occupancy.maxChildren})</small>
            </span>
          </div>

          <div className={styles.statCard}>
            <span><RiUserAddFill size={24} color="#000000"/></span>
            <span className={styles.statTitle}>Base Rate</span>
            <span>
              <strong className={styles.big}>{data.roomPrice.baseRate}</strong>
              <small className={styles.small}>/Night</small>
            </span>
          </div>

          <div className={styles.statCard}>
            <span><RiUserAddFill size={24} color="#000000"/></span>
            <span className={styles.statTitle}>Room View</span>
            <span>
              <strong className={styles.big}>{data.roomDetails.roomView}</strong>
              <small className={styles.small}></small>
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.outlineBtn}>
            <FaEdit size={24} color="#2289FF"/>
            <p className={styles.edit}>Edit Details</p>
          </button>
          <button className={styles.outlineBtn}>
            <RiDeleteBin6Fill size={24} color="#DC2626"/>
            <p className={styles.archive}>Archive</p>
          </button>
        </div>
      </div>
      
    </div>
  );
}
