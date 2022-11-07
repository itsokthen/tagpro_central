import React from "react";
import styled from "styled-components";
import { NavLink, useRouteMatch } from "react-router-dom";

//Pages

//External Imports

const Navbar = (props) => {
  const { url } = useRouteMatch();
  return (
    <>
      <Nav color={props.color.color}>
        <ul>
          <LinkStyle to={`${url}/Scores`}>Scores</LinkStyle>
          {/* <LinkStyle to={`${url}/Schedule`}>Schedule</LinkStyle> */}
          <LinkStyle to={`${url}/Standings`}>Standings</LinkStyle>
          <LinkStyle to={`${url}/Stats`}>Stats</LinkStyle>
          <LinkStyle to={`${url}/Teams`}>Teams</LinkStyle>
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
  padding: 0 0 0 19.5%;
  overflow: hidden;
  //width: 100%;
  border-bottom: 1px solid black;
  box-shadow: 0px 5px 5px -5px #111;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: ${(props) => props.color};

  a {
    text-decoration: none;
    color: white;
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

const LinkStyle = styled(NavLink)`
  height: 40px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  &.active {
    border: 2px solid white;
  }
  &:hover {
    border: 2px solid white;
  }
`;

export default Navbar;
