import styles from "./MenuDetail.module.css";
import {
  faGear,
  faArrowLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MenuDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.show}>
        <div className={styles.setting}>
          <Link to={`/`}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className={styles.profile}>Profile</div>
        <div className={styles.follow}>Follow</div>
        <div className={styles.goal}>
          <Link to={`/menu/goal`} className={styles.goalLink}>
            <p>목표</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.goalIcon}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuDetail;
