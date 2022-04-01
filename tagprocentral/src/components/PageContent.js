import React, { Component } from "react";
import styled from "styled-components";

import NestedNav from "./Navbar/NestedNav";

class PageContent extends Component {
  render() {
    return (
      <PageDetails>
        <NestedNavStyle>
          <NestedNav color={this.props} />
        </NestedNavStyle>
        <div>
          <h1>Scoreboard: Game 1 Game 2 Game 3</h1>
          <h1>League Leaders</h1>
          <h3>Caps: okthen koolaid inthesomeday</h3>
          <h3>Caps: okthen koolaid inthesomeday</h3>
          <h3>Caps: okthen koolaid inthesomeday</h3>
        </div>
      </PageDetails>
    );
  }
}

const PageDetails = styled.div`
  width: 100%;
  margin-top: 61px;
  margin-bottom: 15px;
  background-color: white;
`;

const NestedNavStyle = styled.div`
  width: 100%;
  margin-bottom: 15px;
  background-color: red;
`;

export default PageContent;
