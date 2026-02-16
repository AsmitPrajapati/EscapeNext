import { useState, useEffect } from "react";
import { PROPERTY_TYPES } from "../lib/constants";
import styles from "./propertyTypeSelector.module.css";

function PropertyTypeSelector({ data, onChange, onValidityChange }) {
  // restore data when navigating back
  const [selectedId, setSelectedId] = useState(data || null);

  // report changes + validity to parent
  useEffect(() => {
    onChange(selectedId);
    onValidityChange(Boolean(selectedId));
  }, [selectedId]);

  return (
    <div className={styles.selectorContainer}>
      <h2>Which property would you like to list?</h2>

      <div className={styles.typeGrid}>
        {PROPERTY_TYPES.map((type) => {
          const isSelected = selectedId === type.id;

          return (
            <button
              key={type.id}
              type="button"
              className={`${styles.typeCard} ${
                isSelected ? styles.selected : ""
              }`}
              onClick={() => setSelectedId(type.id)}
              aria-pressed={isSelected}
            >
              <div className={styles.cardHeader}>
                <p className={styles.headerText}>{type.name}</p>
                <input type="checkbox" checked={isSelected} className={styles.checkbox} readOnly />
              </div>

              <img
                src={type.image || "/placeholder.svg"}
                alt={type.name}
                className={styles.cardImage}
              />

              <span className={styles.tagText}>{type.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PropertyTypeSelector;
