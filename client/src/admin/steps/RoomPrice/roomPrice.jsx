import { useFormState } from "../../hooks/use-form-state";
import styles from "./roomPrice.module.css";
import { useEffect } from "react";

export default function RoomPriceStep({
  data,
  onChange,
  onValidityChange,
}) {
  const { formData, updateField, setFormData } = useFormState({
    baseRate: "",
    extraAdultCharge: "",
    childCharge: "",
    agreedToTerms: false,
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
      Number(formData.baseRate) > 0 &&
      formData.agreedToTerms === true;

    onValidityChange(Boolean(isValid));
  }, [formData, onChange, onValidityChange]);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h2 className={styles.title}>Base Room Price</h2>

        <div className={styles.section}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Base Rate</label>
            <input
              type="number"
              min="0"
              value={formData.baseRate}
              onChange={(e) =>
                updateField("baseRate", e.target.value)
              }
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Extra Adult Charges
            </label>
            <input
              type="number"
              min="0"
              value={formData.extraAdultCharge}
              onChange={(e) =>
                updateField("extraAdultCharge", e.target.value)
              }
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            Charges for Child
          </label>
          <input
            type="number"
            min="0"
            value={formData.childCharge}
            onChange={(e) =>
              updateField("childCharge", e.target.value)
            }
            className={styles.formInput}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={formData.agreedToTerms}
            onChange={(e) =>
              updateField("agreedToTerms", e.target.checked)
            }
          />
          <p className={styles.checkboxText}>
            I agree to the terms and confirm the pricing is correct.
          </p>
        </div>
      </div>
    </div>
  );
}
