import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.container}>
      <Link to={`/find`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
      <Link to={`/alert`}>
        <FontAwesomeIcon icon={faHeart} />
      </Link>
      <Link to={`/menu`}>
        <FontAwesomeIcon icon={faBars} />
      </Link>
    </div>
  );
}

export default Nav;
