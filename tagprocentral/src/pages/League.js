import React, { Component } from "react";
import styled from "styled-components";

//Page Components
import Navbar from "../components/Navbar/Navbar";

const League = (props) => {
  return (
    <div>
      <Navbar />
      <PageStyle color={props.name.color}>
        <SidebarStyle>
          <h1>{props.name.league}</h1>
          <h1>Miasmi Ballphins</h1>
          <h3>10 - 0 - 0 - 4</h3>
          <h2>Stats</h2>
          <h3>Gasp: 10</h3>
          <h3>Caps: 66</h3>
          <h3>Hold: 3218</h3>
          <h3>Returns: 175</h3>
          <h3>Prevent: 923</h3>
        </SidebarStyle>
        <PageDetails>
          <h1>Scoreboard: Game 1 Game 2 Game 3</h1>
          <h1>League Leaders</h1>
          <h3>Caps: okthen koolaid inthesomeday</h3>
          <h3>Caps: okthen koolaid inthesomeday</h3>
          <h3>Caps: okthen koolaid inthesomeday</h3>
          <h3>Caps: okthen koolaid inthesomeday</h3>
        </PageDetails>
      </PageStyle>
    </div>
  );
};

const PageStyle = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  background-color: ${(props) => props.color};
`;
const SidebarStyle = styled.div`
  width: 360px;
  border-right: 3px solid black;
  border-bottom: 0;
  padding-top: 10px;
  padding-left: 20px;
`;

const PageDetails = styled.div`
  width: 70vw;
  border: 5px solid black;
  margin-left: 3vw;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default League;
