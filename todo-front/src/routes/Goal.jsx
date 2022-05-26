import { useState, useEffect } from "react";
import NavOfMenu from "../components/NavOfMenu";
import styles from "./Goal.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import GoalList from "../components/GoalList";

function Goal() {
  const [toDos, setToDos] = useState([]);

  const getToDos = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/get-category/`)
    ).json();
    setToDos(json.data);
  };
  useEffect(() => {
    getToDos();
  }, []);

  console.log(toDos);

  // 명준이가 url을 배열 형태로 주면 setToDo(json.data)로 설정하고, map 함수로 data.title 이렇게 쓰거나 GoalList 컴포넌트 따로 만들어서 사용

  return (
    <div className={styles.container}>
      <NavOfMenu
        title={`목표`}
        addOrConfirm={
          <Link to={`/menu/goal/goalCRUD`}>
            <FontAwesomeIcon icon={faPlus} className={styles.add} />
          </Link>
        }
      />
      <div className={styles.contents}>
        <h3>일반</h3>
        <div>
          {toDos.map((toDo) => (
            <GoalList
              key={toDo.category_id}
              title={toDo.title}
              id={toDo.category_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goal;
