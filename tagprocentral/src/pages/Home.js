import React from "react";
import styled from "styled-components";

//Page Components
import Navbar from "../components/Navbar/Navbar";
//import Sidebar from "../components/Sidebar/Sidebar";
import PageContent from "../components/PageContent/PageContent";
//import NestedNav from "../components/Navbar/NestedNav";
import Footer from "../components/footer/Footer";

const Home = (props) => {
  return (
    <div>
      <PageStyle color={props.info[props.league].color}>
        {/* <div>
          <Sidebar test={props} color={props.info[props.league].color} />
        </div> */}
        <Navbar info={props.info} />

        <PageContentStyle>
          <PageContent test={props} color={props.info[props.league].color} />
        </PageContentStyle>
        <Footer />
      </PageStyle>
    </div>
  );
};

const PageStyle = styled.div`
  flex-wrap: wrap;
  background-color: ${(props) => props.color};
`;

// const NestedNavStyle = styled.div`
//   width: 100%;
//   width: 100%;
//   margin-top: 61px;
// `;

const PageContentStyle = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export default Home;
