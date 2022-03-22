import React from "react";
import styled from "styled-components";
import { Paper } from "@mui/material";
//Page Components

import Sidebar from "../components/Sidebar/Sidebar";

const MLTP = () => {
  return (
    <Page>
      <Nav>
        <h1>hi</h1>
      </Nav>
      <Nav>
        <h1>hi</h1>
      </Nav>
    </Page>
  );
};

//Styled components
const Nav = styled.div`
  height: 10vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  box-sizing: border-box;
  background-color: lightblue;
`
const Page = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`



export default MLTP;
