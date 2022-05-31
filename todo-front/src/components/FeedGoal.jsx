import { faBoxOpen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ModalContent from "./ModalContent";

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
const GoalList = styled.div`
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
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    zIndex: 10,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    background: "#fff",
    overflow: "auto",
    top: "40vh",
    left: "38vw",
    right: "38vw",
    bottom: "40vh",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
    boxSizing: "content-box",
  },
};
const GoalContent = styled.div`
  width: 100%;
  cursor: pointer;
`;

function FeedGoal({ category_title, category_id }) {
  const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [toDoLs, setToDoLs] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  // getToDoLs
  const getToDoLs = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:8000/get-todo/${category_id}`)
    ).json();
    setToDoLs(json.data);
    // setLoading(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // setToDos((current) => [toDo, ...current]);

    await fetch(`http://127.0.0.1:8000/create-todo/${category_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: toDo,
      }),
    });
    setToDo("");
    getToDoLs();
  };

  useEffect(() => {
    getToDoLs();
  }, []);

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

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  return (
    <Container>
      <Goal
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <FontAwesomeIcon icon={faBoxOpen} className=".box" />
        <p>{category_title}</p>
        <Add icon={faPlus} />
      </Goal>
      {isModalOpen ? (
        <div ref={ref}>
          <GoalList>
            {toDoLs.map((toDoL) => (
              <GoalComponent key={toDoL.todo_id}>
                <input type="checkbox" value={toDoL.content} />
                {/* <Link to={`/todo/${toDoL.todo_id}`}>{toDoL.content}</Link> */}
                <GoalContent
                  onClick={() => {
                    setModalIsOpen(true);
                    setModalData(toDoL);
                    // console.log(toDoL.todo_id);
                  }}
                >
                  {toDoL.content}
                </GoalContent>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={modalStyle}
                >
                  <ModalContent
                    todo_title={modalData.content}
                    todo_id={modalData.todo_id}
                  />
                </Modal>
              </GoalComponent>
            ))}
          </GoalList>

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
                {/* <Link to={`/todo/${toDoL.todo_id}`}>{toDoL.content}</Link> */}
                <GoalContent
                  onClick={() => {
                    setModalIsOpen(true);
                    setModalData(toDoL);
                    // console.log(toDoL.todo_id);
                  }}
                >
                  {toDoL.content}
                </GoalContent>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={modalStyle}
                >
                  <ModalContent
                    todo_title={modalData.content}
                    todo_id={modalData.todo_id}
                  />
                </Modal>
              </GoalComponent>
            ))}
          </GoalList>
        </div>
      )}
    </Container>
  );
}

export default FeedGoal;
