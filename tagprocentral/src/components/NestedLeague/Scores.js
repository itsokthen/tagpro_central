import React from "react";
import styled from "styled-components";
import { Route, useRouteMatch, Switch, NavLink } from "react-router-dom";

// import Results from "./OTIScheduleJson.json";
import GameDays from "../json/schedule/gamedays.json";
import ScoreWeek from "../ScoresComponents/ScoreWeek.js";

// import { useEffect, useContext } from "react";

// import SeasonStats from "../../apis/SeasonStats";
// import { SeasonContext } from "../context/SeasonContext";

const Scores = () => {
  // console.log(Results[0].results[0].game1);
  const { url } = useRouteMatch();

  return (
    <>
      <SectionStyle>
        <SectionHeader>Weekly Scoreboard</SectionHeader>

        <WeeksSection>
          <NewDiv>
            {GameDays.map((item) => (
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
        <Route path={`${url}/match1`} component={ScoreWeek} />
        <Route path={`${url}/match2`} component={ScoreWeek} />
        <Route path={`${url}/match3`} component={ScoreWeek} />
        <Route path={`${url}/match4`} component={ScoreWeek} />
        <Route path={`${url}/match5`} component={ScoreWeek} />
        <Route path={`${url}/match6`} component={ScoreWeek} />
        <Route path={`${url}/semifinals`} component={ScoreWeek} />
        <Route path={`${url}/finals`} component={ScoreWeek} />
      </Switch>
    </>
  );
};

const SectionStyle = styled.section`
  min-width: 80vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 2%;
  border-radius: 20px;
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
