import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DeleteBtn = styled.button`
  position: absolute;
  top: 40%;
  left: 50%;
  background-color: rgb(230, 230, 230);
  border-radius: 5px;
  padding: 20px;
  font-size: 30px;
  cursor: pointer;
`;
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // delete goal
  const deleteF = async () => {
    await fetch(`http://127.0.0.1:8000/delete-todo/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate(`/`);
    });
  };

  return (
    <Container>
      <DeleteBtn onClick={deleteF}>삭제</DeleteBtn>
    </Container>
  );
}

export default TodoDetail;
