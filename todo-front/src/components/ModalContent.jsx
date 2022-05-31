// import {useEffect, useState} from "react"
import styled from "styled-components";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div``;
const DeleteBtn = styled.button`
  border: 0;
  border-radius: 50%;
  padding: 0;
  /* background-color: red; */
  font-size: 18px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
  padding-bottom: 20px;
`;
const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    margin-top: 10px;
  }
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

  return (
    <Container>
      <Title>{todo_title}</Title>
      <DeleteContainer>
        <DeleteBtn onClick={deleteF}>
          <FontAwesomeIcon icon={faTrashCan} />
        </DeleteBtn>
        <p>삭제</p>
      </DeleteContainer>
    </Container>
  );
}

export default ModalContent;
