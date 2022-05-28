import styles from "./MenuDetail.module.css";
import { faGear, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MenuDetail() {
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getToDos = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/get-category/`)
    ).json();
    setToDos(json.data);
    setLoading(false);
  };
  useEffect(() => {
    getToDos();
  }, []);

  return (
    <div className={styles.show}>
      <div className={styles.setting}>
        <FontAwesomeIcon icon={faGear} />
      </div>
      <div className={styles.profile}>Profile</div>
      <div className={styles.follow}>Follow</div>
      <div className={styles.goal}>
        <Link to={`/menu/goal`} className={styles.goalLink}>
          <p>목표</p>
          <FontAwesomeIcon icon={faChevronRight} className={styles.goalIcon} />
        </Link>
        <ul className={styles.menuGoals}>
          {toDos.map((toDo) => (
            <li key={toDo.category_id} className={styles.menuGoal}>
              {toDo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuDetail;
