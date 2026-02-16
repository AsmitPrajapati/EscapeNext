import styles from "./otpPage.module.css";
import { useFormState } from "../../hooks/use-form-state";

export default function OtpPage({ email, onSuccess }) {
  const { formData, updateField } = useFormState({ otp: "" });

  const handleVerify = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className={styles.otpContainer}>
      <div className={styles.otpWrapper}>
        <div className={styles.otpImage}>
          <div className={styles.img}
                  />
        </div>

        <div className={styles.otpFormSection}>
          <div className={styles.otpHeader}>
            <h1>
              <span>ESCAPE</span>
              <span style={{ color: "#0066ff" }}>NEXT</span>
            </h1>
          </div>

          <h2 style={{ fontSize: "1.25rem"}}>
            Enter 6-digit code (sent via email or SMS)
          </h2>

          <form onSubmit={handleVerify} className={styles.formGroup}>
            <input
              type="text"
              value={formData.otp}
              onChange={(e) => updateField("otp", e.target.value)}
              className={styles.formInput}
              placeholder="Enter OTP"
              maxLength="6"
            />

            <button type="submit" className={styles.verifyButton}>
              Verify Code
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "0.875rem",
                color: "#666",
              }}
            >
              Didn't get the code?{" "}
              <a href="#" style={{ color: "#0066ff", textDecoration: "none" }}>
                Resend OTP
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
