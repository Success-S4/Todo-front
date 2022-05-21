import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import Find from "./routes/Find";
import Alert from "./routes/Alert";
import Menu from "./routes/Menu";
import Goal from "./routes/Goal";
import GlobalStyles from "./GlobalStyles";
import GoalCRUD from "./routes/GoalCRUD";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/find" element={<Find />}></Route>
        <Route path="/alert" element={<Alert />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/menu/goal" element={<Goal />}></Route>
        <Route path="/menu/goal/goalCRUD" element={<GoalCRUD />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
