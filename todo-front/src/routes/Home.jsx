import Nav from "../components/Nav";
import styles from "./Home.module.css";
import Feed from "../components/Feed";

function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.show}>
        <div className={styles.box}>프로필,달력 (업데이트 예정)</div>
        <div className={styles.feed}>
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Home;
