import styles from "./Feed.module.css";
import { useState, useEffect } from "react";
import FeedGoal from "./FeedGoal";

function Feed() {
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

  return (
    <div>
      <h1 className={styles.title}>Feed</h1>
      <div>
        {toDos.map((toDo) => (
          <FeedGoal key={toDo.category_id} title={toDo.title} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
