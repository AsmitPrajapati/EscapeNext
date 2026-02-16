import { useFormState } from "../../hooks/use-form-state";
import { STAR_RATINGS } from "../../lib/constants";
import styles from "./basicInfo.module.css";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function BasicInfoStep({ data, onChange, onValidityChange }) {
  const { formData, updateField, setFormData } = useFormState({
    propertyName: "",
    starRating: "",
    builtYear: "",
    acceptingBookings: "",
    channelManager: null,
    mobileNumber: "",
    email: "",
  });

  // ✅ Restore data when navigating back
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  // ✅ Sync data + validation with parent
  useEffect(() => {
    onChange(formData);

    const isValid =
      formData.propertyName &&
      formData.starRating &&
      formData.mobileNumber &&
      formData.email;

    onValidityChange(Boolean(isValid));
  }, [formData, onChange, onValidityChange]);

  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <div className={styles.container}>     
      <div className={styles.top}>
        <div className={styles.section}>
          <div className={styles.inputField}>
            <label className={styles.label}>Property Name</label>
            <input
              type="text"
              value={formData.propertyName}
              onChange={(e) =>
                updateField("propertyName", e.target.value)
              }
              placeholder="Enter the Full name"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Hotel Star Rating</label>

            <div
              className={styles.customSelect}
              onClick={() => setIsRatingOpen((v) => !v)}
            >
              <span
                className={
                  formData.starRating
                    ? styles.value
                    : styles.placeholder
                }
              >
                {formData.starRating
                  ? `${formData.starRating} Stars`
                  : "Select Rating"}
              </span>
              <ChevronDown />
            </div>

            {isRatingOpen && (
              <div className={styles.dropdownMenu}>
                {STAR_RATINGS.map((rating) => (
                  <div
                    key={rating}
                    className={`${styles.dropdownItem} ${
                      formData.starRating === rating
                        ? styles.activeItem
                        : ""
                    }`}
                    onClick={() => {
                      updateField("starRating", rating);
                      setIsRatingOpen(false);
                    }}
                  >
                    {rating}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.inputField}>
            <label className={styles.label}>
              When was this property built
            </label>
            <select
              value={formData.builtYear}
              onChange={(e) =>
                updateField("builtYear", e.target.value)
              }
              className={styles.formInput}
            >
              <option value="" disabled>
                Select Year
              </option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>
              Accepting Booking since?
            </label>
            <select
              value={formData.acceptingBookings}
              onChange={(e) =>
                updateField("acceptingBookings", e.target.value)
              }
              className={styles.formInput}
            >
              <option value="" disabled>
                Select Year
              </option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
        </div>

        <div className={styles.check}>
          <div className={styles.checkSection}>
            <label className={styles.label}>
              Do you work with channel manager
            </label>
            <p>
              This allows inventory to be updated across platforms.
            </p>
          </div>

          <div className={styles.radioActions}>
            <div className={styles.radioField}>
              <input
                type="radio"
                checked={formData.channelManager === true}
                onChange={() =>
                  updateField("channelManager", true)
                }
              />
              <label className={styles.radioLabel}>Yes</label>
            </div>

            <div className={styles.radioField}>
              <input
                type="radio"
                checked={formData.channelManager === false}
                onChange={() =>
                  updateField("channelManager", false)
                }
              />
              <label className={styles.radioLabel}>No</label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <h3 className={styles.head}>Contact Details</h3>

        <div className={styles.inputField}>
          <label className={styles.label}>Mobile Number</label>
          <input
            type="tel"
            value={formData.mobileNumber}
            onChange={(e) =>
              updateField("mobileNumber", e.target.value)
            }
            placeholder="Mobile Number"
            className={styles.formInput}
          />
        </div>

        <div className={styles.inputField}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            placeholder="Email"
            className={styles.formInput}
          />
        </div>
      </div>
    </div>
  );
}
