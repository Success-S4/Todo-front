import styles from "./NavOfMenu.module.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NavOfMenu({ title, addOrConfirm, backTo }) {
  return (
    <div className={styles.container}>
      <Link to={backTo} className={styles.back}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <p>{title}</p>
      <div className={styles.addOrConfirm}>{addOrConfirm}</div>
    </div>
  );
}

export default NavOfMenu;
