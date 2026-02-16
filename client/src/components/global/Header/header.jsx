import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import RegBtn from "../RegisterBtn/registerBtn";
import LoginBtn from "../LoginBtn/loginBtn";
import Profile from "../Profile/profile";
import MainLogo from "../Logo/logo";
import Navbar from "../Navbar/navbar";
import AuthModal from "../AuthModal/authModal";

import { useAuth } from "../../../Context/AuthContext/authContext";

function Header() {
  const { user } = useAuth();

  const [authModal, setAuthModal] = useState(null);

  return (
    <>
    <div className={styles.container}>
      <MainLogo />
      <Navbar />
      <div className={styles.buttons}>
        {user ? (
          <Profile />
        ) : (
          <>
            <RegBtn  onClick={() => setAuthModal("signup")} />
            <LoginBtn onClick={() => setAuthModal("login")} />
          </>
        )}
      </div>
    </div>

    <AuthModal
        type={authModal}
        onClose={() => setAuthModal(null)}
        switchAuth={(type) => setAuthModal(type)}
    />
    </> 
  );
}

export default Header;
