import { Menu, User } from "lucide-react";
import Styles from "./navigation.module.css"
export default function Navigation() {
  return (
    <nav className={Styles.navigationContainer}>
      <div>
        <h1 className={Styles.navigationLogo}>
          <span className={Styles.navigationLogoText}>ESCAPE</span>
          <span className={Styles.navigationLogo}>NEXT</span>
        </h1>
      </div>
      <div className={Styles.navigationProfile}>
        <button className={Styles.iconButton}>
          <Menu size={24}  />
        </button>
        <button className={Styles.iconButton}>
          <User size={24}  />
        </button>
      </div>
    </nav>
  );
}
