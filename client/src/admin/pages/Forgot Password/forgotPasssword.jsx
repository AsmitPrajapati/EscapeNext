import styles from "./forgotPassword.module.css";
import { useFormState } from "../../hooks/use-form-state";

export default function ForgotPassword({ email, onSuccess }) {
  const { formData, updateField } = useFormState({ email: "" });

  const handleVerify = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.image}>
          <div className={styles.img} />
        </div>

        <div className={styles.formSection}>
          <div className={styles.header}>
            <h1>
              <span>ESCAPE</span>
              <span style={{ color: "#0066ff" }}>NEXT</span>
            </h1>
          </div>

          <h2 className={styles.title}>
            Reset Password
          </h2>

          <form onSubmit={handleVerify} className={styles.formGroup}>
            <input
              type="email"
              value={formData.otp}
              onChange={(e) => updateField("email", e.target.value)}
              className={styles.formInput}
              placeholder="Enter Email"
              maxLength="6"
            />

            <button type="submit" className={styles.mailButton}>
              Send Email
            </button>

            <p className={styles.text}>
              We’ve sent you an email with reset instructions.
              {/* <a href="#" style={{ color: "#0066ff", textDecoration: "none" }}>
                Resend OTP
              </a> */}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
