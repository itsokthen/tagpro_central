import React from "react";
import styled from "styled-components";
import { Route, useRouteMatch, Switch, NavLink } from "react-router-dom";

// import Results from "./OTIScheduleJson.json";
import OTIGameDays from "../json/schedule/OTIgamedays.json";
import OTIAGameDays from "../json/schedule/OTIAgamedays.json";
import OTIEUGameDays from "../json/schedule/OTIEUgamedays.json";
import ScoreWeek from "../ScoresComponents/ScoreWeek.js";

// import { useEffect, useContext } from "react";

// import SeasonStats from "../../apis/SeasonStats";
// import { SeasonContext } from "../context/SeasonContext";

const Scores = (props) => {
  // console.log(Results[0].results[0].game1);
  let Gamedays = false;
  if (props.league === "OTI") Gamedays = OTIGameDays;
  else if (props.league === "OTIA") Gamedays = OTIAGameDays;
  else if (props.league === "OTIEU") Gamedays = OTIEUGameDays;

  const { url } = useRouteMatch();
  return (
    <>
      <SectionStyle>
        <SectionHeader>Weekly Scoreboard</SectionHeader>
        <WeeksSection>
          <NewDiv>
            {Gamedays &&
              Gamedays.map((item) => (
                <Links to={`${url}/${item.href}`} key={item.week}>
                  <Week>
                    <span>{item.week}</span>
                    <span>{item.date}</span>
                  </Week>
                </Links>
              ))}
          </NewDiv>
        </WeeksSection>
      </SectionStyle>

      <Switch>
        <Route path={`${url}/match1`}>
          <ScoreWeek
            match="match1"
            league={`${props.league}`}
            color={`${props.color}`}
          />
        </Route>
        <Route path={`${url}/match2`}>
          <ScoreWeek match="match2" league={`${props.league}`} />
        </Route>
        <Route path={`${url}/match3`}>
          <ScoreWeek match="match3" league={`${props.league}`} />
        </Route>
        <Route path={`${url}/match4`}>
          <ScoreWeek match="match4" league={`${props.league}`} />
        </Route>
        <Route path={`${url}/match5`}>
          <ScoreWeek match="match5" league={`${props.league}`} />
        </Route>
        <Route path={`${url}/match6`}>
          <ScoreWeek match="match6" league={`${props.league}`} />
        </Route>
        <Route path={`${url}/semifinals`}>
          <ScoreWeek match="semifinals" league={`${props.league}`} />
        </Route>
        <Route path={`${url}/finals`}>
          <ScoreWeek match="finals" league={`${props.league}`} />
        </Route>
      </Switch>
    </>
  );
};

const SectionStyle = styled.section`
  min-width: 80vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 2vh;
  border-radius: 20px;
  margin-bottom: 3vh;
`;

const SectionHeader = styled.section`
  position: relative;
  text-align: center;
  margin: 0 15%;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const WeeksSection = styled.section`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const NewDiv = styled.div`
  text-align: center;
  display: flex;
  margin: 2px 10px;
  padding: 2px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Links = styled(NavLink)`
  text-align: center;
  flex-wrap: wrap;
  margin: 0 10px;
  padding: 2px;
  width: 120px;
  &.active {
    font-weight: bold;
  }
  &:hover {
    font-weight: bold;
  }
`;
const Week = styled.section`
  display: flex;
  flex-direction: column;
`;

export default Scores;
