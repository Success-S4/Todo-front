import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 18px;
    font-weight: 700;
  }
`;
const AddOrConfirm = styled.div`
  width: 50px;
  text-align: center;
  margin-right: 15px;
`;
const BackLink = styled(Link)`
  display: block;
  padding: 15px 25px;
  margin: 0;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  :hover {
    background-color: rgb(245, 245, 245);
  }
`;

function NavOfMenu({ title, addOrConfirm, backTo }) {
  return (
    <Container>
      <BackLink to={backTo}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </BackLink>

      <p>{title}</p>
      <AddOrConfirm>{addOrConfirm}</AddOrConfirm>
    </Container>
  );
}

export default NavOfMenu;
