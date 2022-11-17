import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import menuDownArrow from "../../images/menuDownArrow.png";

//External Imports

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div ref={menuRef}>
      <Nav>
        <Logo>
          <Link to="/">Tagpro Central</Link>
        </Logo>
        <Leagues>
          <ul>
            <Link to="/OTI/Scores/match1">
              <NavStyle color={props.info.OTI}>OTI</NavStyle>
            </Link>
            <Link to="/OTIA/Scores/match1">
              <NavStyle color={props.info.OTIA}>OTI A</NavStyle>
            </Link>
            <Link to="/OTIEU/Scores/match1">
              <NavStyle color={props.info.OTIEU}>OTI EU</NavStyle>
            </Link>
            <Link to="/OTIEGG/Scores/match1">
              <NavStyle color={props.info.OTIEGG}>OTI Egg</NavStyle>
            </Link>

            {/* <Link to="/">
              <NavStyle color={props.info.OTHER}>NALTP</NavStyle>
            </Link> */}
          </ul>
          <DropdownMenu>
            <div onClick={handleClick}>
              <img src={menuDownArrow} alt="Menu" />
            </div>
          </DropdownMenu>
          {open && (
            <Dropdowns>
              <MenuList>
                <Link to="/OTI/Scores/match1">
                  <NavStyles color={props.info.OTI} onClick={handleClick}>
                    OTI
                  </NavStyles>
                </Link>
                <Link to="/OTIA/Scores/match1">
                  <NavStyles color={props.info.OTIA} onClick={handleClick}>
                    OTIA
                  </NavStyles>
                </Link>
                <Link to="/OTIEU/Scores/match1">
                  <NavStyles color={props.info.OTIEU} onClick={handleClick}>
                    OTIEU
                  </NavStyles>
                </Link>
                <Link to="/OTIEGG/Scores/match1">
                  <NavStyles color={props.info.OTIEGG} onClick={handleClick}>
                    OTIGG
                  </NavStyles>
                </Link>
              </MenuList>
            </Dropdowns>
          )}
        </Leagues>
      </Nav>
    </div>
  );
};

//Styled components

const Logo = styled.div`
  width: 10%;
  min-width: 100px;
  font-family: "Merriweather", serif;
  font-size: 1.2rem;
  font-style: italic;
  @media (max-width: 850px) {
    padding: 0;
    margin-left: 10px;
  }
`;

const Leagues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  }
`;

const Nav = styled.div`
  padding-left: 20%;
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
  @media (max-width: 850px) {
    padding: 0;
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
    background-color: ${(props) => props.color};
    color: white;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

// Dropdown Menu CSS

const Dropdowns = styled.div`
  position: absolute;
  top: 58px;
  width: 200px;
  //transform: translateX();
  background-color: #242526;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;

  @media (min-width: 850px) {
    display: none;
  }
`;
const NavStyles = styled.li`
  height: 60px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  &:hover {
    border: 2px solid white;
    background-color: ${(props) => props.color};
    color: white;
  }

  margin: 2px;
`;

const DropdownMenu = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Navbar;
