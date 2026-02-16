import { ChevronDown } from "lucide-react";
import { useFormState } from "../../hooks/use-form-state";
import styles from "./occupancyStep.module.css";
import { useEffect } from "react";

export default function OccupancyStep({
  data,
  onChange,
  onValidityChange,
}) {
  const { formData, updateField, setFormData } = useFormState({
    baseAdults: 1,
    maxAdults: 1,
    maxChildren: 0,
    smokingAllowed: "",
    agree: false,
    });

  // ✅ Restore data when going back
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  // ✅ Sync data + validation
  useEffect(() => {
    onChange(formData);

    const isValid =
      formData.baseAdults > 0 &&
      formData.maxAdults >= formData.baseAdults;

    onValidityChange(isValid);
  }, [formData, onChange, onValidityChange]);


  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>Room Occupancy & Guests</h2>
          <div className={styles.formGroup}>
            <div className={styles.formUp}>
              <label className={styles.subTitle}>
                Base Adults
              </label>
              <ChevronDown size={24} />
            </div>
            <div className={styles.formDown}>
              <p className={styles.text}>
                Ideal number of adults that can de accomodated in this room.Occupancy calculations are based on the accommodation of two adults per room.
              </p>
              <div className={styles.qtyContainer}>
                <button className={styles.qtyBtn}
                  type="button"
                  onClick={() =>
                    updateField("baseAdults", Math.max(1, formData.baseAdults - 1))
                  }>-
                </button>
                <div className={styles.qtyBox}>{
                  String(formData.baseAdults).padStart(2, "0")}
                </div>
                <button className={styles.qtyBtn}
                  type="button"
                  onClick={() =>
                    updateField("baseAdults", formData.baseAdults + 1)
                  }>+
                </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.formUp}>
              <label className={styles.subTitle}>
                Maximum Adults
              </label>
              <ChevronDown size={24} />
            </div>
            <div className={styles.formDown}>
              <p className={styles.text}>
                Ideal number of adults that can de accomodated in this room.Occupancy calculations are based on the accommodation of two adults per room.
              </p>
              <div className={styles.qtyContainer}>
                <button className={styles.qtyBtn}
                  type="button"
                  onClick={() =>
                    updateField("maxAdults", Math.max(formData.baseAdults, formData.maxAdults - 1))
                  }>-
                </button>
                <div className={styles.qtyBox}>
                  {String(formData.maxAdults).padStart(2, "0")}
                </div>
                <button className={styles.qtyBtn}
                  type="button"
                  onClick={() =>
                    updateField("maxAdults", formData.maxAdults + 1)
                  }>+
                </button>
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.formUp}>
              <label className={styles.subTitle}>
                Maximum Children
              </label>
              <ChevronDown size={24} />
            </div>
            <div className={styles.formDown}>
              <p className={styles.text}>
                Ideal number of adults that can de accomodated in this room.Occupancy calculations are based on the accommodation of two adults per room.
              </p>
              <div className={styles.qtyContainer}>
                <button className={styles.qtyBtn}
                  type="button"
                  onClick={() =>
                    updateField("maxChildren", Math.max(0, formData.maxChildren - 1))
                  }>-
                </button>
                <div className={styles.qtyBox}>
                  {String(formData.maxChildren).padStart(2, "0")}
                </div>
                <button className={styles.qtyBtn}
                  type="button"
                  onClick={() =>
                    updateField("maxChildren", formData.maxChildren + 1)
                  }>+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.inputSection}>
        <label className={styles.formLabel}>
          Smoking Allowed
        </label>
        <input
          type="text"
          value={formData.smokingAllowed}
          onChange={(e) => updateField("smokingAllowed", e.target.value)}
          placeholder="Please add details"
          className={styles.formInput}
        />
      </div>
      
      <div className={styles.checkboxSection}>
        <input
          type="checkbox"
          checked={formData.agree}
          onChange={(e) =>
            updateField("agree", e.target.checked)
          }
        />
        <label className={styles.checkboxLabel}>
          I confirm the address provided is correct as per registration
        </label>
      </div>
    </div> 
  )
}
