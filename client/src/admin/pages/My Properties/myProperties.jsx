import styles from "./myProperties.module.css";

import { IoAlertCircle } from "react-icons/io5";

function MyProperties({ onSelectProperty }) {

  return (
    <>
      <div className={styles.propertiesHeader}>
        <h2 className={styles.headerText}>My Properties</h2>
        <button
          className={styles.listPropertyButton}
          onClick={() => onSelectProperty(null)}

        >
          + List New Property
        </button>
      </div>
    
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.icon}><IoAlertCircle size={24}/></div>
          <h3 className={styles.tag}>Not Active Properties</h3>
          <p className={styles.description}>
            You don't have any properties which are in the listing process.
            Create a listing and activate your new property now.
          </p>
          <button
            className={styles.listPropertyButton}
            onClick={() => onSelectProperty(null)}
          >
            + List New Property
          </button>
        </div>
      </div>
    </>
  );
}
export default MyProperties;