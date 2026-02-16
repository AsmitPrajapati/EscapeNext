import { useFormState } from "../../hooks/use-form-state";
import styles from "./availability-step.module.css";
import { useEffect } from "react";

export default function AvailabilityStep({
  data,
  onChange,
  onValidityChange,
}) {
  const { formData, updateField, setFormData } = useFormState({
    startDate: "",
    endDate: "",
  });

  // ✅ Restore data when navigating back
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  // ✅ Sync data + validation
  useEffect(() => {
    onChange(formData);

    const isValid =
      formData.startDate &&
      formData.endDate &&
      new Date(formData.startDate) <= new Date(formData.endDate);

    onValidityChange(Boolean(isValid));
  }, [formData, onChange, onValidityChange]);

  return (
    <div className={styles.Container}>
      <div className={styles.subContainer}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Availability</h2>
          <p className={styles.text}>
            Please select the start and end dates on which your property can be booked by guests
          </p>
        </div>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Start Date</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) =>
                updateField("startDate", e.target.value)
              }
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>End Date</label>
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) =>
                updateField("endDate", e.target.value)
              }
              className={styles.formInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
