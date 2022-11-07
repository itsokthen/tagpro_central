import React from "react";
import styled from "styled-components";
import { useLayoutEffect } from "react";

//Page Components
import Navbar from "../components/Navbar/Navbar";
//import Sidebar from "../components/Sidebar/Sidebar";
import PageContent from "../components/PageContent/PageContent";
import NestedNav from "../components/Navbar/NestedNav";
import Footer from "../components/footer/Footer";

const League = (props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageStyle color={props.info[props.league].color}>
      <Navbar info={props.info} />
      <NestedNavStyle>
        <NestedNav color={props} />
      </NestedNavStyle>
      <PageContentStyle>
        <PageContent
          league={props.info[props.league].league}
          color={props.info[props.league].color}
        />
      </PageContentStyle>
      {/* <div>
        {props.info[props.league].league === "MLTP" ? (
          <h1>bye</h1>
        ) : props.info[props.league].league === "NLTP" ? (
          <h1>HI</h1>
        ) : props.info[props.league].league === "ELTP" ? (
          <h1>estsd</h1>
        ) : (
          <h1>sdfsdf</h1>
        )}
      </div> */}
      <Footer />
    </PageStyle>
  );
};

const PageStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.color};
`;

const NestedNavStyle = styled.div`
  width: 100%;
  margin-top: 61px;
`;

const PageContentStyle = styled.div`
  display: flex;
  //flex-wrap: wrap;
  width: 100%;
  min-height: 79vh;
`;

export default League;
