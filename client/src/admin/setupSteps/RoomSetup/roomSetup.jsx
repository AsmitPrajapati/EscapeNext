
import { useFormState } from "../../hooks/use-form-state";
import styles from "./roomSetup.module.css";
import { useEffect } from "react";

export default function RoomSetupStep({ data, onChange, onValidityChange }) {
  const { formData, updateField, setFormData } = useFormState({
    roomName: ""
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
      formData.roomName

    onValidityChange(Boolean(isValid));
  }, [formData, onChange, onValidityChange]);

  return (
    <div className={styles.container}>
      <div className={styles.inputField}>        
        <label className={styles.label}>Room Name</label>
        <input
          type="text"
          value={formData.roomName}
          onChange={(e) =>
            updateField("roomName", e.target.value)
          }
          placeholder="Deluxe Room"
          className={styles.formInput}
        />  
        </div>     
    </div>
  );
}

