import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import OTI from "../json/schedule/OTIScores.json";
import OTIA from "../json/schedule/OTIAScores.json";
import OTIEU from "../json/schedule/OTIEUScores.json";
import OTIEGG from "../json/schedule/OTIEGGScores.json";

import OTIStandings from "../json/Standings/OTIStandings.json";

const Standings = (props) => {
  const [gp, setGp] = useState();

  function addGP() {
    setGp((prevGP) => prevGP + 1);
  }
  let StandingsData = false;
  let Results = false;
  if (props.league === "OTI") {
    StandingsData = OTIStandings;
    Results = OTI;
  }
  let GP = [];
  console.log(StandingsData);
  return (
    <>
      <Standing key={uuidv4()}>
        <Section>
          <Header>
            <span>Team</span>
            <span>GP</span>
            <span>W</span>
            <span>L</span>
            <span>CF</span>
            <span>CA</span>
            <span>CD</span>
          </Header>
          <TeamStats>
            {StandingsData.map((item) => {
              return (
                <Team>
                  <span>{item.Team}</span>
                  <span>{item.GP}</span>
                  <span>{item.W}</span>
                  <span>{item.L}</span>
                  <span>{item.CF}</span>
                  <span>{item.CA}</span>
                  <span>{item.CF - item.CA}</span>
                </Team>
              );
            })}
          </TeamStats>
        </Section>
        <Tiles>sdf</Tiles>
      </Standing>
    </>
  );
};

export default Standings;

const Standing = styled.div`
  display: flex;
  width: 80vw;
  border: 1px solid black;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  border: 1px solid black;
`;
const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  span {
    width: 100px;
  }
`;
const TeamStats = styled.div`
  justify-content: space-around;
  align-items: center;
`;
const Team = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  span {
    width: 100px;
  }
`;
const Tiles = styled.div`
  width: 60%;
  border: 1px solid black;
`;
