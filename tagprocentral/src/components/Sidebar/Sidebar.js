import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import tpmlogo from "../images/tpmlogo.png";

//External Imports
import Divider from "@mui/material/Divider";

class Sidebar extends Component {
  render() {
    return (
      <SidebarStyle>
        <Logo>
          <LogoLink color={this.props.color} to="/">
            TagproCentral
          </LogoLink>
        </Logo>

        <Divider />
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </SidebarStyle>
    );
  }
}

const SidebarStyle = styled.div`
  position: fixed;
  min-width: 300px;
  border-right: 1px solid #e1e1e1;
  background: white;
  height: 100%;
  top: 0;
`;

const Logo = styled.h3`
  font-family: "Merriweather", serif;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: white;
  background-color: black;

  a {
    text-decoration: none;
    color: ${(props) => props.color};
  }
`;

const LogoLink = styled(Link)`
  color: ${(props) => props.color};
`;

// const Tpmdiv = styled.button`
//   border: none;
//   background: transparent;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   padding: 10px;
// `;

// const Tpmlogostyled = styled.img`
//   background-color: black;
//   width: 150px;
//   height: auto;
// `;

export default Sidebar;
