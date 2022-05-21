import styles from "./NavOfMenu.module.css";
import { faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NavOfMenu({ title }) {
  return (
    <div className={styles.container}>
      <Link to={`/menu`} className={styles.back}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <p>{title}</p>
      <Link to={`/menu/goal/goalCRUD`}>
        <FontAwesomeIcon icon={faPlus} className={styles.add} />
      </Link>
    </div>
  );
}

export default NavOfMenu;
