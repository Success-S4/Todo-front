import styles from "./GoalDetail.module.css";
import { useState, useEffect } from "react";
import NavOfMenu from "../components/NavOfMenu";
import { useParams, useNavigate } from "react-router-dom";
import SettingsColors from "../components/SettingsColors";

function GoalDetail() {
  const { id } = useParams();
  const [toDo, setToDo] = useState([]);

  const getToDo = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/detail-category/${id}`)
    ).json();
    setToDo(json.data);
  };
  useEffect(() => {
    getToDo();
  }, []);

  let navigate = useNavigate();

  const deleteF = async () => {
    await fetch(`http://127.0.0.1:8000/delete-category/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/menu/goal/");
    });
  };

  return (
    <div>
      <NavOfMenu title={`목표`} />
      <div className={styles.container}>
        {/* url 넘어오면 수정! */}
        <input type="text" value={toDo.title} className={styles.goal} />
        <SettingsColors />
        <ul className={styles.endDelete}>
          <li>종료하기</li>
          <li>
            <button className={styles.delete} onClick={deleteF}>
              삭제
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GoalDetail;
