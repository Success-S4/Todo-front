import styled from "styled-components";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Container = styled.div`
  /* display: flex; */
`;
const Title = styled.input`
  text-align: center;
  padding-bottom: 20px;
  border: 0;
  :focus {
    outline: none;
  }
  font-size: 15px;
  font-weight: 600;
`;
const Button = styled.button`
  border: 0;
  border-radius: 50%;
  padding: 0;
  /* background-color: red; */
  font-size: 18px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 10px;
    font-size: 13px;
  }
`;
const ButtonContainerM = styled(ButtonContainer)`
  position: absolute;
  left: 20%;
`;
const ButtonContainerD = styled(ButtonContainer)`
  position: absolute;
  right: 20%;
`;

function ModalContent({ todo_title, todo_id }) {
  // const navigate = useNavigate();

  // delete goal
  const deleteF = async () => {
    await fetch(`http://127.0.0.1:8000/delete-todo/${todo_id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };

  // update goal
  const [toDoU, setToDoU] = useState("");
  const onChange = (e) => setToDoU(e.target.value);
  // let navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDoU === "") {
      return;
    }
    fetch(`http://127.0.0.1:8000/update-todo/${todo_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: toDoU,
        is_completed: 1,
      }),
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Title
          type="text"
          defaultValue={todo_title}
          onChange={onChange}
        ></Title>
        <ButtonContainerM>
          <Button type="submit">
            <FontAwesomeIcon icon={faPen} />
          </Button>
          <p>수정</p>
        </ButtonContainerM>
      </form>
      <Container>
        <ButtonContainerD>
          <Button onClick={deleteF}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
          <p>삭제</p>
        </ButtonContainerD>
      </Container>
    </div>
  );
}

export default ModalContent;
