import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { useAuth } from "../../../Context/AuthContext/authContext";

function Profile() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className={styles.container} ref={ref}>
        <div className={styles.profile}></div>
        <p className={styles.profileName}>Hi {user?.name}</p>
        <ChevronDown size={24} color="#2289FF" onClick={() => setOpen(!open)} />

        {open && (
          <div className={styles.dropdown}>
            <div className={styles.item}>Profile</div>
            <div className={styles.item}>Settings</div>
            <div className={styles.item} onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Profile;
