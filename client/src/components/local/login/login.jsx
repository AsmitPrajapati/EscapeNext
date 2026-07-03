import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./login.module.css";

import Btn from "../../global/button/button";
import LinkButton from "../../global/linkbutton/linkbutton";
import image from "../../../../public/Assets/image.jpg";
import GoogleIcon from "../../../../public/Assets/Google.svg";
import FacebookIcon from "../../../../public/Assets/Facebook.svg";
import Input from "../../global/input/inputField";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../utils/constants";

import { useAuth } from "../../../Context/AuthContext/authContext";

function Login({ onClose, switchAuth }) {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/login/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        login(data.user, data.token);
        toast.success("Login Successfully");
        onClose();
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftContainer}>
        <img className={styles.leftContainerImage} src={image}></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.heading}>
          Your Next Getaway Awaits – Sign In to Continue
        </div>
        <form onSubmit={handleLogin} className={styles.Form}>
          <Input
            label="Your Email"
            placeholder="your email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className={styles.FormField}>
            <label className={styles.FormInputLabel}>Your password</label>
            <input
              className={styles.FormInput}
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className={styles.rememberForgotSection}>
              <div className={styles.remember}>
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <div className={styles.forgot} onClick={() => switchAuth("forgot-password")}>Forget Password?</div>
            </div>
          </div>
          <Btn text="Login" />
        </form>
        <div className={styles.bottomContainer}>
          <div className={styles.upper}>
            <div className={styles.line}></div>
            <div className={styles.text}>Instant Login</div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.lowerSection}>
            <div className={styles.firstField}>
              <LinkButton Icon={GoogleIcon} text="Sign in with Google" />
              <LinkButton Icon={FacebookIcon} text="Sign in with Facebook" />
            </div>
            <div className={styles.secondField}>
              Dont any account
              <span
                className={styles.Signuplink}
                onClick={() => switchAuth("signup")}
              >
                {" "}
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
