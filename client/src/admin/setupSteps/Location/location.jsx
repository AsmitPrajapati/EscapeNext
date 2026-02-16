import { useFormState } from "../../hooks/use-form-state";
import Tabs from "../../tabs/tab";
import styles from "./location.module.css";
import { useEffect } from "react";

export default function LocationStep({ data, onChange, onValidityChange }) {
  const { formData, updateField, setFormData } = useFormState({
    search: "",
    address: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    agree: false,
  });

  // ✅ Restore data when going back
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  // ✅ Sync data + validation with parent
  useEffect(() => {
    onChange(formData);

    const isValid =
      formData.address &&
      formData.street &&
      formData.city &&
      formData.state &&
      formData.pincode &&
      formData.country &&
      formData.agree;

    onValidityChange(Boolean(isValid));
  }, [formData, onChange, onValidityChange]);

  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <div className={styles.locationFormSection}>
          <input
            type="text"
            value={formData.search}
            onChange={(e) => updateField("search", e.target.value)}
            placeholder="Search here"
            className={styles.formInput}
          />

          <button type="button" className={styles.currentLocationButton}>
            Or use my current location
          </button>
        </div>

        <div className={styles.inputSection}>
          <label className={styles.formLabel}>
            House / Building / Apartment No.
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => updateField("address", e.target.value)}
            placeholder="Please add details"
            className={styles.formInput}
          />
        </div>

        <div className={styles.inputSection}>
          <label className={styles.formLabel}>
            Locality / Area / Street / Sector
          </label>
          <input
            type="text"
            value={formData.street}
            onChange={(e) => updateField("street", e.target.value)}
            placeholder="Please add details"
            className={styles.formInput}
          />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputSection}>
            <label className={styles.formLabel}>Pincode</label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) => updateField("pincode", e.target.value)}
              placeholder="Enter pincode"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputSection}>
            <label className={styles.formLabel}>Country</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => updateField("country", e.target.value)}
              placeholder="India"
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.inputSection}>
          <label className={styles.formLabel}>State</label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => updateField("state", e.target.value)}
            placeholder="Uttarakhand"
            className={styles.formInput}
          />
        </div>

        <div className={styles.inputSection}>
          <label className={styles.formLabel}>City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder="Uttarkashi"
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

      <div className={styles.mapContainer}>
        Map Placeholder
      </div>
    </div>
  );
}
