import { useState, useEffect } from "react";
import FeedGoal from "./FeedGoal";
import LoadingSpin from "react-loading-spin";
import styled from "styled-components";

const Loading = styled.div`
  position: relative;
  top: 200px;
  left: 30px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin: 25px 0;
`;
const Container = styled.div`
  overflow: scroll;
  max-height: 540px;
`;

function Feed() {
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
  // console.log(toDos);

  return (
    <div>
      {loading ? (
        <Loading>
          <LoadingSpin primaryColor="black" secondaryColor="#fff" />
        </Loading>
      ) : (
        <div>
          <Title>Feed</Title>

          <Container>
            {toDos.map((toDo) => (
              <FeedGoal
                key={toDo.category_id}
                category_title={toDo.title}
                category_id={toDo.category_id}
              />
            ))}
          </Container>
        </div>
      )}
    </div>
  );
}

export default Feed;
