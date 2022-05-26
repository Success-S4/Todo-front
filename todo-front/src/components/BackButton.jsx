import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1, { replace: true });
      }}
      className={styles.back}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
}

export default BackButton;
