import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">TagproCentral</Link>
      </Logo>
      <ul>
        <li>
          <Link to="MLTP">MLTP</Link>
        </li>
        <li>
          <Link to="NLTP">NLTP</Link>
        </li>
        <li>
          <Link to="ELTP">ELTP</Link>
        </li>
        <li>
          <Link to="OLTP">OLTP</Link>
        </li>
        <li>
          <Link to="/">OTHER</Link>
        </li>
        <li>
          <Link to="/">OTHER</Link>
        </li>
      </ul>
    </Nav>
  );
};

//Styled components
const Nav = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    justify-content: space-around;
    padding-left: 30vw;
    list-style: none;
  }
  li {
    margin-right: 30px;
    position: relative;
  }
`;
const Logo = styled.h3`
  font-size: 1.2rem;
  font-style: italic;
  padding: 0 0 0 15rem;
`;

export default Navbar;
