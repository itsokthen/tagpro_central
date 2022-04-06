import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//External Imports

const Navbar = (props) => {
  console.log();
  return (
    <div>
      <Nav>
        <ul>
          <Link to="/MLTP">
            <NavStyle color="#3498db">MLTP</NavStyle>
          </Link>
          <Link to="/NLTP">
            <NavStyle color="#e67e22">NLTP</NavStyle>
          </Link>
          <Link to="/ELTP">
            <NavStyle color="#c0392b">ELTP</NavStyle>
          </Link>
          <Link to="/OLTP">
            <NavStyle color="#27ae60">OLTP</NavStyle>
          </Link>
          <Link to="/">
            <NavStyle color="#9347c9">OTHER</NavStyle>
          </Link>
          <Link to="/">
            <NavStyle color="#9347c9">M</NavStyle>
          </Link>
        </ul>
      </Nav>
    </div>
  );
};

//Styled components

const Nav = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: black;

  a{
    text-decoration: none;
    color:black;
  }

  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 25px;
    list-style: none;
  }
  li {
    position: relative;
  }
`;

const NavStyle = styled.li`
  height: 60px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  &:hover {
    border 2px solid white;
    background-color: ${(props) => props.color};
    color: white;
  }
`;

export default Navbar;
