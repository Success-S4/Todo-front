import Nav from "../components/Nav";
import MenuDetail from "../components/MenuDetail";
import styles from "./Menu.module.css";
import Home from "../routes/Home";

function Menu() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <MenuDetail />
    </div>
  );
}

export default Menu;
