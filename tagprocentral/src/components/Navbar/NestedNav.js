import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//External Imports

const Navbar = (props) => {
  console.log(props.color.color);
  return (
    <div>
      <Nav color={props.color.color}>
        <ul>
          <Link to="MLTP">
            <NavStyle color={props.color.color}>Scores</NavStyle>
          </Link>
          <Link to="NLTP">
            <NavStyle color={props.color.color}>Schedule</NavStyle>
          </Link>
          <Link to="ELTP">
            <NavStyle color={props.color.color}>Standings</NavStyle>
          </Link>
          <Link to="OLTP">
            <NavStyle color={props.color.color}>Stats</NavStyle>
          </Link>
          <Link to="/">
            <NavStyle color={props.color.color}>Teams</NavStyle>
          </Link>
        </ul>
      </Nav>
    </div>
  );
};

//Styled components

const Nav = styled.div`
  min-height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 0px 5px 5px -5px #111;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: ${(props) => props.color};

  a{
    text-decoration: none;
    color:black;
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
  height: 40px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  
    
}
  background-color: ${(props) => props.color};
    color: white;
  &:hover {
    border 2px solid white;

  }
`;

export default Navbar;
