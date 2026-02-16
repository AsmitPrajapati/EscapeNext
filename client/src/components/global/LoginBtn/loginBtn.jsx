import React from "react";
import styles from "./loginBtn.module.css"

function LoginBtn({ onClick }) {
  return (
    <button className={styles.container} onClick={onClick}>
      Login
    </button>
    )
}
export default LoginBtn;