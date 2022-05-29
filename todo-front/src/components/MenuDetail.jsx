import { faGear, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

function MenuDetail() {
  const Setting = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    align-items: center;
  `;
  const Profile = styled.div`
    padding: 15px 0;
  `;
  const Follow = styled.div`
    padding: 15px 0;
  `;
  const Goal = styled.div`
    padding: 0;
    border-top: 1px solid rgb(248, 248, 248);
    border-bottom: 1px solid rgb(248, 248, 248);
  `;
  const GoalLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 15px 0;
  `;
  const GoalIcon = styled(FontAwesomeIcon)`
    font-size: 10px;
    color: rgb(204, 204, 204);
  `;
  const MenuGoals = styled.ul`
    display: flex;
    flex-wrap: wrap;
  `;
  const MenuGoal = styled.li`
    padding: 8px;
    background-color: rgb(245, 245, 245);
    border-radius: 5px;
    margin: 0 10px 10px 0;
  `;

  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getToDos = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/get-category/`)
    ).json();
    setToDos(json.data);
    setLoading(false);
  };
  useEffect(() => {
    getToDos();
  }, []);

  return (
    <div>
      <Setting>
        <FontAwesomeIcon icon={faGear} />
      </Setting>

      <Profile>Profile</Profile>
      <Follow>Follow</Follow>

      <Goal>
        <GoalLink to={`/menu/goal`}>
          <p>목표</p>
          <GoalIcon icon={faChevronRight} />
        </GoalLink>

        <MenuGoals>
          {toDos.map((toDo) => (
            <MenuGoal key={toDo.category_id}>{toDo.title}</MenuGoal>
          ))}
        </MenuGoals>
      </Goal>
    </div>
  );
}

export default MenuDetail;
