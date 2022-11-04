import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

//Pages

//External Imports

const Navbar = (props) => {
  const { url } = useRouteMatch();
  return (
    <>
      <Nav color={props.color.color}>
        <ul>
          <Link to={`${url}/Scores/match1`}>
            <NavStyle color={props.color.color}>Scores</NavStyle>
          </Link>
          <Link to={`${url}/Schedule`}>
            <NavStyle color={props.color.color}>Schedule</NavStyle>
          </Link>
          <Link to={`${url}/Standings`}>
            <NavStyle color={props.color.color}>Standings</NavStyle>
          </Link>
          <Link to={`${url}/Stats`}>
            <NavStyle color={props.color.color}>Stats</NavStyle>
          </Link>
          <Link to={`${url}/Teams`}>
            <NavStyle color={props.color.color}>Teams</NavStyle>
          </Link>
        </ul>
      </Nav>
    </>
  );
};

//Styled components

const Nav = styled.div`
  min-height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 19.5%;
  overflow: hidden;
  //width: 100%;
  border-bottom: 1px solid black;
  box-shadow: 0px 5px 5px -5px #111;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: ${(props) => props.color};

  a {
    text-decoration: none;
    color: black;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
  li {
    position: relative;
  }
`;

const NavStyle = styled.li`
  height: 40px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};
  color: white;
  &:hover {
    border: 2px solid white;
  }
`;

export default Navbar;
