import React from "react";
import styled from "styled-components";

const NewNavbar = () => {
  return (
    <Nav>
      <Logo>
        <a href="#">TagproCentral</a>
      </Logo>
      <ul>
        <li>
          <a href="#">MLTP</a>
        </li>
        <li>
          <a href="#">NLTP</a>
        </li>
        <li>
          <a href="#">ELTP</a>
        </li>
        <li>
          <a href="#">OLTP</a>
        </li>
        <li>
          <a href="#">OTHER</a>
        </li>
      </ul>
    </Nav>
  );
};

//Styled components
const Nav = styled.div`
  height: 7vh;
  display: flex;
  margin: auto;
  align-items: center;
  overflow: hidden;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
  }
  ul {
    justify-content: space-around;
    display: flex;
    list-style: none;
    padding-left: 50vw;
  }
  li {
    margin-left: 30px;
    position: relative;
  }
`;
const Logo = styled.h3`
  font-size: 1.2rem;
  font-style: italic;
  width: 0px;
  padding: 0 3rem;
`;

export default NewNavbar;
