import Nav from "../components/Nav";
import styles from "./Home.module.css";
import Feed from "../components/Feed";

function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.feed}>
        <Feed />
      </div>
    </div>
  );
}

export default Home;
