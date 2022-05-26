import styles from "./NavOfMenu.module.css";
import BackButton from "./BackButton";

function NavOfMenu({ title, addOrConfirm }) {
  return (
    <div className={styles.container}>
      <BackButton />
      <p>{title}</p>
      <div className={styles.addOrConfirm}>{addOrConfirm}</div>
    </div>
  );
}

export default NavOfMenu;
