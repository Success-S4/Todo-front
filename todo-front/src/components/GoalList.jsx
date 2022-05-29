import { Link } from "react-router-dom";
import styled from "styled-components";

function GoalList({ title, id }) {
  const Goal = styled.div`
    padding: 10px;
    background-color: rgb(245, 245, 245);
    border-radius: 5px;
    width: fit-content;
    margin: 15px 0;
    cursor: pointer;
  `;
  const Line = styled.div`
    background-color: rgb(245, 245, 245);
    width: 100vw;
    height: 1px;
  `;
  return (
    <div>
      <Link to={`/menu/goal/${id}`}>
        <Goal>{title}</Goal>
      </Link>
      <Line></Line>
    </div>
  );
}

export default GoalList;
