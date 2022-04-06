import React, { Component } from "react";
import styled from "styled-components";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import NestedNav from "../Navbar/NestedNav";
import Scores from "../NestedLeague/Scores";
import Schedule from "../NestedLeague/Schedule";
import Standings from "../NestedLeague/Standings";
import Stats from "../NestedLeague/Stats";
import Teams from "../NestedLeague/Teams";

const PageContent = (props) => {
  const { path, url } = useRouteMatch();
  return (
    <PageDetails>
      <NestedNavStyle>
        <NestedNav color={props} />
      </NestedNavStyle>
      <div>
        <Switch>
          <Route path={`${path}/Scores`} component={Scores} />
          <Route path={`${path}/Schedule`} component={Schedule} />
          <Route path={`${path}/Standings`} component={Standings} />
          <Route path={`${path}/Stats`} component={Stats} />
          <Route path={`${path}/Teams`} component={Teams} />
        </Switch>
        <h1>Scoreboard: Game 1 Game 2 Game 3</h1>
        <h1>League Leaders</h1>
        <h3>Caps: okthen koolaid inthesomeday</h3>
        <h3>Caps: okthen koolaid inthesomeday</h3>
        <h3>Caps: okthen koolaid inthesomeday</h3>
        <Scores />
      </div>
    </PageDetails>
  );
};

const PageDetails = styled.div`
  width: 100%;
  margin-top: 61px;
  margin-bottom: 15px;
  background-color: white;
`;

const NestedNavStyle = styled.div`
  width: 100%;
  margin-bottom: 15px;
  background-color: lightblue;
`;

export default PageContent;
