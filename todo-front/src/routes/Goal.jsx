import { useState, useEffect } from "react";
import NavOfMenu from "../components/NavOfMenu";
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import GoalList from "../components/GoalList";
import LoadingSpin from "react-loading-spin";

const Container = styled.div`
  /* overflow: scroll; */
`;
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Contents = styled.div`
  position: relative;
  top: 60px;
  padding: 20px;
  h3 {
    font-size: 15px;
    color: rgb(186, 186, 186);
  }
`;

function Goal() {
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

  console.log(toDos);

  // 명준이가 url을 배열 형태로 주면 setToDo(json.data)로 설정하고, map 함수로 data.title 이렇게 쓰거나 GoalList 컴포넌트 따로 만들어서 사용

  return (
    <Container>
      {loading ? (
        <Loading>
          <LoadingSpin primaryColor="black" secondaryColor="#fff" />
        </Loading>
      ) : (
        <div>
          <NavOfMenu
            title={`목표`}
            addOrConfirm={
              <Link to={`/menu/goal/goalCRUD`}>
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            }
            backTo={`/`}
          />
          <Contents>
            <h3>일반</h3>
            <div>
              {toDos.map((toDo) => (
                <GoalList
                  key={toDo.category_id}
                  title={toDo.title}
                  id={toDo.category_id}
                />
              ))}
            </div>
          </Contents>
        </div>
      )}
    </Container>
  );
}

export default Goal;
