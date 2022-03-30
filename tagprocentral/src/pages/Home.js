import React from "react";
import styled from "styled-components";

//Page Components
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import PageContent from "../components/PageContent";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <Sidebar league={props} />
      <PageStyle>
        <PageContent league={props} />
      </PageStyle>
    </div>
  );
};

const PageStyle = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  background-color: lightblue;
`;

export default Home;
