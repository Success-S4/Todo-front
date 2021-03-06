import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Find from "./routes/Find";
import Alert from "./routes/Alert";
import MenuDetail from "./components/MenuDetail";
import Goal from "./routes/Goal";
import GlobalStyles from "./GlobalStyles";
import GoalCRUD from "./routes/GoalCRUD";
import GoalDetail from "./routes/GoalDetail";
import TodoDetail from "./routes/TodoDetail";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo/:id" element={<TodoDetail />}></Route>
        <Route path="/find" element={<Find />}></Route>
        <Route path="/alert" element={<Alert />}></Route>
        <Route path="/menu" element={<MenuDetail />}></Route>
        <Route path="/menu/goal" element={<Goal />}></Route>
        <Route path="/menu/goal/goalCRUD" element={<GoalCRUD />}></Route>
        <Route path="/menu/goal/:id" element={<GoalDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
