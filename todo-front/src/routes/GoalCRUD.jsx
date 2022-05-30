import { useState } from "react";
import NavOfMenu from "../components/NavOfMenu";
import { useNavigate } from "react-router-dom";
import SettingsColors from "../components/SettingsColors";
import styled from "styled-components";

const Contents = styled.div`
  position: relative;
  top: 50px;
  padding: 15px;
`;
const Confirm = styled.button`
  text-decoration: none;
  background-color: #fff;
  border: 0;
  position: absolute;
  right: 15px;
  top: -40px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
const GoalInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid black;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 15px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: rgb(209, 209, 209);
    font-weight: 700;
  }
`;

function GoalCRUD() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    fetch(`http://127.0.0.1:8000/create-category/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: toDo,
        view_auth: "3",
      }),
    }).then(navigate(-1));
  };
  let navigate = useNavigate();

  return (
    <div>
      <NavOfMenu title={`목표`} backTo={`/menu/goal`} />
      <Contents>
        <form onSubmit={onSubmit}>
          <GoalInput
            type="text"
            placeholder="목표 입력"
            onChange={onChange}
            value={toDo}
          />

          <Confirm>확인</Confirm>
        </form>
        <SettingsColors />
      </Contents>
    </div>
  );
}

export default GoalCRUD;
