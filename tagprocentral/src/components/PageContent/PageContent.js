import React from "react";
import styled from "styled-components";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import { useLayoutEffect } from "react";

//import NestedNav from "../Navbar/NestedNav";
import Scores from "../NestedLeague/Scores";
import Schedule from "../NestedLeague/Schedule";
import Standings from "../NestedLeague/Standings";
import Stats from "../NestedLeague/Stats";
import Teams from "../NestedLeague/Teams";
//import TableMUI from "../Table/TableMUI";

const PageContent = (props) => {
  const { path } = useRouteMatch();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageDetails color={props.color}>
      {/* <NestedNavStyle>
        <NestedNav color={props} />
      </NestedNavStyle> */}
      {/* <div>
        <TableMUI />
      </div> */}
      <LeagueInfoStyle>
        <Switch>
          <Route path={`${path}/Scores`}>
            <Scores league={`${props.league}`} color={`${props.color}`} />
          </Route>
          <Route path={`${path}/Schedule`}>
            <Schedule league={`${props.league}`} />
          </Route>
          <Route path={`${path}/Standings`}>
            <Standings league={`${props.league}`} />
          </Route>
          <Route path={`${path}/Stats`}>
            <Stats league={`${props.league}`} />
          </Route>
          <Route path={`${path}/Teams`}>
            <Teams league={`${props.league}`} />
          </Route>
        </Switch>
      </LeagueInfoStyle>
    </PageDetails>
  );
};

const PageDetails = styled.div`
  width: 100vw;
  //margin-bottom: 15px;
  display: flex;
  justify-content: center;
  background-color: #d9dbde//#edeef0;
  //color: ${(props) => props.color};
`;

/* const NestedNavStyle = styled.div`
  width: 100%;
  margin-bottom: 15px;
`; */

const LeagueInfoStyle = styled.div`
  max-width: 80vw;
`;

export default PageContent;
