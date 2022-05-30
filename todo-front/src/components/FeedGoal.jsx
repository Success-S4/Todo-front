import { faBoxOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* overflow: scroll; */
`;
const Goal = styled.div`
  padding: 10px;
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  width: fit-content;
  margin: 15px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0 10px;
  }
`;
const Add = styled(FontAwesomeIcon)`
  font-size: 10px;
  background-color: #fff;
  border-radius: 50%;
  padding: 3px;
`;
const GoalList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const GoalInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid black;
  padding: 10px 7px;
  font-size: 18px;
  margin-bottom: 15px;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: rgb(209, 209, 209);
    font-weight: 700;
  }
`;
const GoalListNew = styled.ul`
  display: flex;
  flex-direction: column-reverse;
`;
const GoalComponent = styled.div`
  display: flex;
  margin: 10px 0;
  font-size: 18px;
  align-items: center;
  input {
    transform: scale(1.6);
    margin-right: 10px;
  }
  a {
    width: 100%;
  }
`;
const SubmitBox = styled.form`
  display: flex;
`;
const GoalCheckBox = styled.input`
  margin-top: 15px;
  transform: scale(1.6);
`;

function FeedGoal({ title, id }) {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toDoLs, setToDoLs] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // setToDos((current) => [toDo, ...current]);

    fetch(`http://127.0.0.1:8000/create-todo/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: toDo,
      }),
    });
    setToDo("");
  };

  // Get TodoLs
  const getToDoLs = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/get-todo/${id}`)
    ).json();
    setToDoLs(json.data);
    setLoading(false);
  };
  // useEffect(() => {
  //   getToDoLs();
  // }, []);

  useEffect(() => {
    getToDoLs();
  }, [onSubmit]);

  // 명준이한테 get-todo 데이터셋 받으면 아래 map함수 쓴 곳에 key값 추가!

  // detecting outside click
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <Container>
      <Goal
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <FontAwesomeIcon icon={faBoxOpen} className=".box" />
        <p>{title}</p>
        <Add icon={faPlus} />
      </Goal>
      {isModalOpen ? (
        <div ref={ref}>
          <GoalList>
            {toDoLs.map((toDoL) => (
              <GoalComponent key={toDoL.todo_id}>
                <input type="checkbox" value={toDoL.content} />
                <Link
                  to={`/todo/${toDoL.todo_id}`}
                  onClick={() => setState({ isPaneOpen: true })}
                >
                  <li>{toDoL.content}</li>
                </Link>
              </GoalComponent>
            ))}
          </GoalList>

          {/* <GoalListNew>
            {toDos.map((toDo, index) => (
              <GoalComponent key={index}>
                <input type="checkbox" value={toDo} />
                <li>{toDo}</li>
              </GoalComponent>
            ))}
          </GoalListNew> */}

          <SubmitBox onSubmit={onSubmit}>
            <GoalCheckBox type="checkbox" />
            <GoalInput
              type="text"
              placeholder="입력"
              onChange={onChange}
              value={toDo}
            />
          </SubmitBox>
        </div>
      ) : (
        <div>
          <GoalList>
            {toDoLs.map((toDoL) => (
              <GoalComponent key={toDoL.todo_id}>
                <input type="checkbox" value={toDoL.content} />
                <Link to={`/todo/${toDoL.todo_id}`}>{toDoL.content}</Link>
              </GoalComponent>
            ))}
          </GoalList>

          {/* <GoalListNew>
            {toDos.map((toDo, index) => (
              <GoalComponent key={index}>
                <input type="checkbox" value={toDo} />
                <li>{toDo}</li>
              </GoalComponent>
            ))}
          </GoalListNew> */}
        </div>
      )}
      {/* <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
      <Modal isOpen={true} onRequestClose={() => setModalIsOpen(false)}>
        This is Modal content
        <button onClick={() => setModalIsOpen(false)}>Modal Open</button>
      </Modal> */}
    </Container>
  );
}

export default FeedGoal;
