import React from "react";
import styles from "./Nabvar.module.css";
import { FaUser } from "react-icons/fa";
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.header}>
        <div className={styles.left}>Welcome to CareSync HealthCare</div>
        <div className={styles.right}>
          <a href="">ABOUT US</a>
          <a href="">GALLERY</a>
          <a href="">TEAM</a>
          <a href="">CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
