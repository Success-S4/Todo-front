import { useParams, useNavigate } from "react-router-dom";

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
    <div>
      <button onClick={deleteF}>삭제</button>
    </div>
  );
}

export default TodoDetail;
