import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//External Imports
import Divider from "@mui/material/Divider";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <ul>
          <MLTP>
            <Link to="MLTP">MLTP</Link>
          </MLTP>
          <NLTP>
            <Link to="NLTP">NLTP</Link>
          </NLTP>

          <Link to="ELTP">
            <ELTP>ELTP</ELTP>
          </Link>

          <OLTP>
            <Link to="OLTP">OLTP</Link>
          </OLTP>
          <OTHER>
            <Link to="/">M</Link>
          </OTHER>
          <OTHER>
            <Link to="/">M</Link>
          </OTHER>
          <NewButton>
            <Link to="/"></Link>
          </NewButton>
        </ul>
      </Nav>
    </div>
  );
};

//Styled components

const NewButton = styled.button`
  border: none;
  height: 60px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
`;
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
    padding-left: 45vw;
    list-style: none;
  }
  li {
    position: relative;
  }
`;

const MLTP = styled.li`
  height: 60px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3498db;
  background-color: #3498db;
  &:hover {
    border 2px solid white;
  }
`;

const NLTP = styled.li`
  height: 60px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e67e22;
  &:hover {
    border 2px solid white;
  }
`;
const ELTP = styled.li`
  height: 50px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c0392b;
  &:hover {
    border 2px solid white;
    background-color: #c0392b;
    color: white;
  }
`;
const OLTP = styled.li`
  height: 60px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27ae60;
  &:hover {
    border 2px solid white;
  }
`;
const OTHER = styled.li`
  height: 60px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9347c9;
  &:hover {
    border 2px solid white;
  }
`;

export default Navbar;
