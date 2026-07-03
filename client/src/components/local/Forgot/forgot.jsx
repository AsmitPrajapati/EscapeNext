// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import styles from "./login.module.css";

// import Btn from "../../global/button/button";
// import LinkButton from "../../global/linkbutton/linkbutton";
// import image from "../../../../public/Assets/image.jpg";
// import GoogleIcon from "../../../../public/Assets/Google.svg";
// import FacebookIcon from "../../../../public/Assets/Facebook.svg";
// import Input from "../../global/input/inputField";
// import { toast } from "react-toastify";
// import { BASE_URL } from "../../../utils/constants";

// import { useAuth } from "../../../Context/AuthContext/authContext";

// function Login({ onClose, switchAuth }) {

//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${BASE_URL}/api/login/post`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         login(data.user, data.token);
//         toast.success("Login Successfully");
//         onClose();
//       } else {
//         toast.error("Invalid credentials");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <div className={styles.leftContainer}>
//         <img className={styles.leftContainerImage} src={image}></img>
//       </div>
//       <div className={styles.rightContainer}>
//         <div className={styles.heading}>
//           Forgot Your Password?
//         </div>
//         <form onSubmit={handleLogin} className={styles.Form}>
//           <Input
//             label="Email"
//             placeholder="your email"
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <Btn text="Send OTP" />
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;

import React, { useState } from "react";
import styles from "./forgot.module.css";
import Btn from "../../global/button/button";
import Input from "../../global/input/inputField";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils/constants";

import image from "../../../../public/Assets/image.jpg";

function ForgotPassword({ onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // STEP 1: Send OTP

  const handleSendOtp = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(`${BASE_URL}/api/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("OTP sent to your email");
      setStep(2);
    } else {
      toast.error(data.message);
    }
  } catch (err) {
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  // STEP 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("OTP verified");
        setStep(3);
      } else {
        toast.error("OTP not verified");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  // STEP 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Password updated successfully");
        onClose();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftContainer}>
        <img className={styles.leftContainerImage} src={image}></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.heading}>Forgot Password</div>

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className={styles.Form}>
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Btn text={loading ? "Sending..." : "Send OTP"} disabled={loading} />
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className={styles.Form}>
            <Input
              label="Enter OTP"
              placeholder="Enter OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Btn text="Verify OTP" />
          </form>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className={styles.Form}>
            <Input
              label="New Password"
              placeholder="Enter new password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Btn text="Reset Password" />
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
