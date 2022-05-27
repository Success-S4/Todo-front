import styles from "./Feed.module.css";
import { useState, useEffect } from "react";
import FeedGoal from "./FeedGoal";
import LoadingSpin from "react-loading-spin";

function Feed() {
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
  console.log(toDos);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>
          <LoadingSpin primaryColor="black" secondaryColor="#fff" />
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>Feed</h1>
          <div>
            {toDos.map((toDo) => (
              <FeedGoal key={toDo.category_id} title={toDo.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;
