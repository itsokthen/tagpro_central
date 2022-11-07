import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//External Imports

const Navbar = (props) => {
  return (
    <div>
      <Nav>
        <Logo>
          <Link to="/">Tagpro Central</Link>
        </Logo>
        <Leagues>
          <ul>
            <Link to="/OTI/Scores">
              <NavStyle color={props.info.OTI}>OTI</NavStyle>
            </Link>
            <Link to="/OTIA">
              <NavStyle color={props.info.OTIA}>OTI A</NavStyle>
            </Link>
            <Link to="/OTIEU">
              <NavStyle color={props.info.OTIEU}>OTI EU</NavStyle>
            </Link>
            <Link to="/OTIEGG">
              <NavStyle color={props.info.OTIEGG}>OTI Egg</NavStyle>
            </Link>
            <Link to="/">
              <NavStyle color={props.info.OTHER}>OTHER</NavStyle>
            </Link>
            <Link to="/">
              <NavStyle color={props.info.OTHER}>NALTP</NavStyle>
            </Link>
          </ul>
        </Leagues>
      </Nav>
    </div>
  );
};

//Styled components

const Logo = styled.div`
  width: 20%;
  min-width: 100px;
  padding: 0 5%;
  font-family: "Merriweather", serif;
  font-size: 1.2rem;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Leagues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.div`
  z-index: 1000;
  min-height: 60px;
  display: flex;
  align-items: center;
  display: flex;

  position: fixed;
  top: 0;
  width: 100%;
/*   border-bottom: 1px solid #e1e1e1;*/
  font-weight: 700;
  font-size: 1.5rem;
  background-color: black;

  a{
    text-decoration: none;
    color:white;
  }

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
  height: 60px;
  width: 100px;
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
