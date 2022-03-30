import React, { Component } from "react";
import styled from "styled-components";

//Page Components
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import PageContent from "../components/PageContent";

const League = (props) => {
  return (
    <div>
      <PageStyle color={props.info[props.league].color}>
        <Navbar />
        <Sidebar test={props} />
        <PageContent test={props} />
      </PageStyle>
    </div>
  );
};

const PageStyle = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  top: 0;
`;

export default League;
