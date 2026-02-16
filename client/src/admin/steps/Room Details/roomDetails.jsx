import { useFormState } from "../../hooks/use-form-state";
import styles from "./roomDetails.module.css";
import { useEffect } from "react";

export default function RoomDetailsStep({
  data,
  onChange,
  onValidityChange,
}) {
  const { formData, updateField, setFormData } = useFormState({
    maxGuests: "",
    pricePerNight: "",
    roomType: "",
    bedType: "",
    roomSize: "",
    roomView: "",
  });

  // ✅ Restore data on back navigation
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  // ✅ Sync data + validation
  useEffect(() => {
    onChange(formData);

    const isValid =
      Number(formData.maxGuests) > 0 &&
      Number(formData.pricePerNight) > 0 &&
      Number(formData.roomSize) > 0 &&
      formData.roomType.trim() !== "" &&
      formData.bedType.trim() !== "" &&
      formData.roomView.trim() !== "";

      onValidityChange(isValid);
    }, [formData, onChange, onValidityChange]);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Max Guests</label>
          <input
            type="number"
            min="0"
            value={formData.maxGuests}
            onChange={(e) =>
              updateField("maxGuests", e.target.value)
            }
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            Price per Night
          </label>
          <input
            type="number"
            min="0"
            value={formData.pricePerNight}
            onChange={(e) =>
              updateField("pricePerNight", e.target.value)
            }
            className={styles.formInput}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Room Type</label>
          <input
            type="text"
            min="0"
            value={formData.roomType}
            onChange={(e) =>
              updateField("roomType", e.target.value)
            }
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Bed Type</label>
          <input
            type="text"
            min="0"
            value={formData.bedType}
            onChange={(e) =>
              updateField("bedType", e.target.value)
            }
            className={styles.formInput}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Room Size</label>
          <input
            type="number"
            min="0"
            value={formData.roomSize}
            onChange={(e) =>
              updateField("roomSize", e.target.value)
            }
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Room View</label>
          <input
            type="text"
            min="0"
            value={formData.roomView}
            onChange={(e) =>
              updateField("roomView", e.target.value)
            }
            className={styles.formInput}
          />
        </div>
      </div>
    </div>
  );
}
