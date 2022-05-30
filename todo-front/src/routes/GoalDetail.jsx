import { useState, useEffect } from "react";
import NavOfMenu from "../components/NavOfMenu";
import { useParams, useNavigate } from "react-router-dom";
import SettingsColors from "../components/SettingsColors";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 50px;
  padding: 20px;
  font-size: 16px;
`;
const Goal = styled.input`
  margin: 15px 0;
  border: 0;
  padding: 10px;
  border-bottom: 2px solid rgb(96, 209, 85);
  width: 100%;
  color: rgb(96, 209, 85);
  font-weight: 700;
  font-size: 20px;
  :focus {
    outline: none;
  }
`;
const EndDelete = styled.ul`
  display: flex;
  li {
    width: 100%;
    background-color: rgb(234, 234, 234);
    margin-right: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    button {
      padding: 10px 0;
      font-size: 16px;
      border-radius: 5px;
      width: 100%;
      border: 0;
      cursor: pointer;
      color: red;
    }
  }
`;

const Confirm = styled.button`
  background-color: #fff;
  border: 0;
  position: absolute;
  right: 15px;
  top: -40px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

function GoalDetail() {
  const { id } = useParams();
  const [toDo, setToDo] = useState([]);

  const getToDo = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/detail-category/${id}`)
    ).json();
    setToDo(json.data);
  };

  useEffect(() => {
    getToDo();
  }, []);

  let navigate = useNavigate();

  // Delete Category
  const deleteF = async () => {
    await fetch(`http://127.0.0.1:8000/delete-category/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/menu/goal/");
    });
  };

  // Update Category
  const [toDoU, setToDoU] = useState("");
  const onChange = (e) => setToDoU(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDoU === "") {
      return;
    }
    fetch(`http://127.0.0.1:8000/update-category/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: toDoU,
        view_auth: "3",
      }),
    }).then(() => {
      navigate("/menu/goal/");
    });
  };

  return (
    <div>
      <NavOfMenu title={`목표`} backTo={`/menu/goal`} />
      <Container>
        <form onSubmit={onSubmit}>
          <Goal
            type="text"
            onChange={onChange}
            defaultValue={toDo.title || ""}
          />
          <Confirm>확인</Confirm>
        </form>
        <SettingsColors />
        <EndDelete>
          <li>종료하기</li>
          <li>
            <button onClick={deleteF}>삭제</button>
          </li>
        </EndDelete>
      </Container>
    </div>
  );
}

export default GoalDetail;
