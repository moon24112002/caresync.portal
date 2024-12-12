import styles from "./Nav.module.css";
import caresynclogo from "../../assets/caresync1.png";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_left}>
        {" "}
        <img src={caresynclogo} alt="CareSync" height={"80px"} />{" "}
      </div>
      <div className={styles.nav_center}>
        <div className={styles.search_title}>
          <select name="search_title" className={styles.search_title_dropdown}>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
            <option value="guest">Guest</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <div className={styles.search_box}>
          <input type="text" placeholder="Search...." />
        </div>
        <div className={styles.search_icon}>
          <span>
            <CiSearch />
          </span>
        </div>
      </div>
      <div className={styles.nav_right}>
        <div className={styles.nav_right_help}>Need Help</div>
        <div className={styles.nav_right_profile}>
          <span>
            <CgProfile />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
