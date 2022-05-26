import styles from "./FeedGoal.module.css";
import { faBoxOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function FeedGoal({ title }) {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => [toDo, ...current]);
    setToDo("");
  };

  return (
    <div>
      <div className={styles.goal}>
        <FontAwesomeIcon icon={faBoxOpen} className={styles.box} />
        <p>{title}</p>
        <FontAwesomeIcon icon={faPlus} className={styles.add} />
      </div>
      <ul>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="입력"
            className={styles.goalInput}
            onChange={onChange}
            value={toDo}
          />
        </form>
        <ul>
          {toDos.map((toDo) => (
            <li>{toDo}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default FeedGoal;
