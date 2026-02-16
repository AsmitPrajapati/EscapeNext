import { useState } from "react";
import styles from "./tabs.module.css";

const tabs = ["Basic Info", "Location", "Room Setup", "Photos"];

export default function Tabs({ activeTab = "Basic Info", onTabChange }) {
  const [active, setActive] = useState("Basic Info");

  const handleTabClick = (tab) => {
    setActive(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`${styles.tabButton} ${
              active === tab ? styles.active : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
