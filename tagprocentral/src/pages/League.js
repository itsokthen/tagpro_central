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
        <div>
          <Sidebar test={props} color={props.info[props.league].color} />
        </div>
        <PageContentStyle>
          <Navbar />
          <PageContent test={props} color={props.info[props.league].color} />
        </PageContentStyle>
      </PageStyle>
    </div>
  );
};

const PageStyle = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
`;

const PageContentStyle = styled.div`
  background-color: yellow;
  display: flex;
  width: 100%;
  margin-left: 300px;
  min-height: 100vh;
`;

export default League;
