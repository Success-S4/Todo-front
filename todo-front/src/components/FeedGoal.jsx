import styles from "./FeedGoal.module.css";
import { faBoxOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

function FeedGoal({ title, id }) {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toDoLs, setToDoLs] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => [toDo, ...current]);

    fetch(`http://127.0.0.1:8000/create-todo/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: toDo,
      }),
    });
    setToDo("");
  };

  // Get TodoLs
  const getToDoLs = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/get-todo/${id}`)
    ).json();
    setToDoLs(json.data);
    setLoading(false);
    console.log(json.data);
  };
  useEffect(() => {
    getToDoLs();
  }, []);

  // 명준이한테 get-todo 데이터셋 받으면 아래 map함수 쓴 곳에 key값 추가!

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
            {toDoLs.map((toDoL) => (
              <div key={toDoL.todo_id} className={styles.goalComponent}>
                <input type="checkbox" value={toDoL.content} />
                <li>{toDoL.content}</li>
              </div>
            ))}
          </ul>
          <ul className={styles.goalListNew}>
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
        <div>
          <ul className={styles.goalList}>
            {toDoLs.map((toDoL) => (
              <div key={toDoL.todo_id} className={styles.goalComponent}>
                <input type="checkbox" value={toDoL.content} />
                <li>{toDoL.content}</li>
              </div>
            ))}
          </ul>
          <ul className={styles.goalListNew}>
            {toDos.map((toDo) => (
              <div className={styles.goalComponent}>
                <input type="checkbox" value={toDo} />
                <li>{toDo}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
      {/* <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
      <Modal isOpen={true} onRequestClose={() => setModalIsOpen(false)}>
        This is Modal content
        <button onClick={() => setModalIsOpen(false)}>Modal Open</button>
      </Modal> */}
    </div>
  );
}

export default FeedGoal;
