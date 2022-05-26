import styles from "./SettingsColors.module.css";

function SettingsColors() {
  return (
    <div>
      <div className={styles.box}>
        <p>공개설정</p>
      </div>
      <div className={styles.box}>
        <p>색상</p>
      </div>
    </div>
  );
}

export default SettingsColors;
