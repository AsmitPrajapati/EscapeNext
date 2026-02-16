import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import styles from "./navbar.module.css"

function Navbar(){
    const navigate = useNavigate();
    
    return(
        <ul className={styles.container}>
            <li className={styles.navLinks} onClick={()=>navigate("/")}>Home</li>
            <li className={styles.navLinks} onClick={()=>navigate("/about")}>About Us</li>
            <li className={styles.navLinks} onClick={()=>navigate("/destination")}>Destination</li>
            <li className={styles.navLinks} onClick={()=>navigate("/contact")}>Contact</li>
            <li className={styles.menu}>
                <Menu  size={18} strokeWidth={4} color="#2289FF"/>
            </li>
            
            
        </ul>
    )
}
export default Navbar;