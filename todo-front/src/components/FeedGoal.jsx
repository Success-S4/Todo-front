import styles from "./FeedGoal.module.css";
import { faBoxOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

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

  // detecting outside click
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.goal}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <FontAwesomeIcon icon={faBoxOpen} className={styles.box} />
        <p>{title}</p>

        <FontAwesomeIcon icon={faPlus} className={styles.add} />
      </div>
      {isModalOpen ? (
        <div ref={ref}>
          <ul className={styles.goalList}>
            {toDos.map((toDo) => (
              <div className={styles.goalComponent}>
                <input type="checkbox" value={toDo} />
                <li>{toDo}</li>
              </div>
            ))}
          </ul>
          <form onSubmit={onSubmit} className={styles.submitBox}>
            <input type="checkbox" className={styles.goalCheckBox} />
            <input
              type="text"
              placeholder="입력"
              className={styles.goalInput}
              onChange={onChange}
              value={toDo}
            />
          </form>
        </div>
      ) : (
        <ul className={styles.goalList}>
          {toDos.map((toDo) => (
            <div className={styles.goalComponent}>
              <input type="checkbox" value={toDo} />
              <li>{toDo}</li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedGoal;
