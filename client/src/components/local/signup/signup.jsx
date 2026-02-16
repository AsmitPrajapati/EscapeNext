import React,{useState} from "react";
import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";

import Img from "../../../../public/Assets/signupImg.jpg";
import GoogleIcon from "../../../../public/Assets/Google.svg";
import FacebookIcon from "../../../../public/Assets/Facebook.svg";

import Btn from "../../global/button/button";
import LinkButton from "../../global/linkbutton/linkbutton";
import Input from "../../global/input/inputField"
import { BASE_URL } from "../../../utils/constants";
import { toast } from "react-toastify";

function Signup({ onClose, switchAuth }) {
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:"",
    password:"",
    confirmPassword:""
  });

  const handleChange = (e)=>{
      setFormData({...formData,[e.target.name]: e.target.value})
  }

  const submitHandler = async (e) => {
  e.preventDefault();

  // 1️⃣ Basic field validation
  if (!formData.email || !formData.password || !formData.confirmPassword) {
    toast.error("Please fill all required fields");
    return;
  }

  // 2️⃣ Match password + confirm password
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  // 3️⃣ Send data to backend
  try {
    const response = await fetch(`${BASE_URL}/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message || "Signup failed");
      return;
    }

    toast.success("Signup successful!");
    console.log(result);
    onClose();

    // Clear form after success
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });

  } catch (error) {
    console.error("Signup error:", error);
    toast.error("Something went wrong. Try again.");
  }
};

  return (
    <div className={styles.signupContainer}>
      <div className={styles.leftContainer}>
        <img className={styles.leftContainerImage} src={Img}></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.topContainer}>
          <div className={styles.heading}>
            Create Your Account & Start Booking with Ease
          </div>
          <form className={styles.Form} onSubmit={submitHandler}>
            <Input label="Your Email" placeholder="your email" type="text" name="email" value={formData.email} onChange={handleChange} required/>
            <Input label="Password" placeholder="your password" type="password" name="password" value={formData.password} onChange={handleChange} required/>
            <Input label="Confirm Password" placeholder="Confirm your password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required/>
            <div className={styles.remember}>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <Btn text="Register" type="submit" />
          </form>
        </div>
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
              Already have an account?
              <span className={styles.loginlink} onClick={switchAuth}> Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
