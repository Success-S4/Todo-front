import NavOfMenu from "../components/NavOfMenu";
import styles from "./Goal.module.css";

function Goal() {
  return (
    <div className={styles.container}>
      <NavOfMenu title={`목표`} />
    </div>
  );
}

export default Goal;
