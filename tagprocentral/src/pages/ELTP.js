import React from "react";
import styled from "styled-components";

//Page Components
import Navbar from "../components/Navbar/Navbar";

const MLTP = () => {
  return (
    <div>
      <Navbar />
      <Body>
        <h1>ELTP</h1>
      </Body>
    </div>
  );
};

const Body = styled.div`
  margin-top: 60px;
`;

export default MLTP;
