import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import { useState } from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";
import MenuDetail from "../components/MenuDetail";

function Nav() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <div className={styles.container}>
      <Link to={`/find`} className={styles.icon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
      <Link to={`/alert`} className={styles.icon}>
        <FontAwesomeIcon icon={faHeart} />
      </Link>
      <button
        className={styles.icon}
        onClick={() => setState({ isPaneOpen: true })}
      >
        <FontAwesomeIcon icon={faBars} className={styles.bars} />
      </button>
      <SlidingPane
        isOpen={state.isPaneOpen}
        from="right"
        width="300px"
        onRequestClose={() => setState({ isPaneOpen: false })}
      >
        <MenuDetail />
      </SlidingPane>
    </div>
  );
}

export default Nav;
