import React from "react";
import InsertData from "../components/Admin/InsertData";
import styled from "styled-components";

const Admin = () => {
  return (
    <div>
      <PageContentStyle>
        <InsertData />;
      </PageContentStyle>
    </div>
  );
};

const PageContentStyle = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export default Admin;
