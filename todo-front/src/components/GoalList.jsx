import styles from "./GoalList.module.css";
import { Link } from "react-router-dom";

function GoalList({ title, id }) {
  return (
    <div className={styles.container}>
      <Link to={`/menu/goal/${id}`}>
        <div className={styles.goal}>{title}</div>
      </Link>
      <div className={styles.line}></div>
    </div>
  );
}

export default GoalList;
