import { Eye, EyeOff } from "lucide-react";
import styles from "./loginPage.module.css"
import { usePasswordVisibility } from "../../hooks/use-password-visibility";
import { useFormState } from "../../hooks/use-form-state";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage() {
  const navigate = useNavigate()

  const { formData, updateField } = useFormState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  const handleLogin = async (e) => {
    e.preventDefault();
     try {
    const response = await fetch(`${API_URL}/api/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

    // console.log("Response data:", data);

    if (!response.ok || !data.success) {
      toast.error(data.message || "Login failed");
      return;
    }

    // Store token
    const storage = formData.rememberMe ? localStorage : sessionStorage;
    storage.setItem("token", data.token);

    toast.success("Login Successfully 🎉");
    navigate("/admin/dashboard"); 

  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong");
  }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        {/* Left Side - Image */}
        <div className={styles.loginImage}>
          <div
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=400&width=400&query=luxury-resort-sunset-with-palm-trees)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              borderRadius: "0.5rem",
            }}
          />
        </div>

        {/* Right Side - Form */}
        <div className={styles.loginFormSection}>
          <div className={styles.loginHeader}>
            <h1>
              <span>ESCAPE</span>
              <span style={{ color: "#0066ff" }}>NEXT</span>
            </h1>
          </div>

          <h2 className={styles.loginHeader}>
            Login to manage your property
          </h2>

          <form onSubmit={handleLogin} className={styles.formGroup}>
            <div className={styles.formInputField}>
              <label className={styles.formLabel}>Your Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={styles.formInput}
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.formInputField}>
              <label className={styles.formLabel}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  className={styles.formInput}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={styles.eyeButton}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className={styles.buttons}>
              <label className={styles.rememberCheckbox}>
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => updateField("rememberMe", e.target.checked)}
                  style={{ width: "16px", height: "16px" }}
                />
                <span>Remember me</span>
              </label>
              <a
                href="#"
                className={styles.forgotPassword}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
