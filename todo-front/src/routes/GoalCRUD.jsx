import { useState } from "react";
import NavOfMenu from "../components/NavOfMenu";
import styles from "./GoalCRUD.module.css";
import { useNavigate } from "react-router-dom";
import SettingsColors from "../components/SettingsColors";

function GoalCRUD() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    fetch(`http://127.0.0.1:8000/create-category/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: toDo,
        view_auth: "3",
      }),
    });
  };
  let navigate = useNavigate();

  return (
    <div>
      <NavOfMenu title={`목표`} backTo={`/menu/goal`} />
      <div className={styles.contents}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="목표 입력"
            onChange={onChange}
            value={toDo}
            className={styles.goalInput}
          />
          <button
            className={styles.confirm}
            onClick={() => {
              navigate(-1);
            }}
          >
            확인
          </button>
        </form>
        <SettingsColors />
      </div>
    </div>
  );
}

export default GoalCRUD;
