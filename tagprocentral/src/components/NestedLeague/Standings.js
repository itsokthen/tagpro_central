import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import OTIStandings from "../json/Standings/OTIStandings.json";
import OTIAStandings from "../json/Standings/OTIAStandings.json";
import OTIEUStandings from "../json/Standings/OTIEUStandings.json";
import OTIEGGStandings from "../json/Standings/OTIEGGStandings.json";

const Standings = (props) => {
  let StandingsData = false;
  if (props.league === "OTI") {
    StandingsData = OTIStandings;
  } else if (props.league === "OTIA") {
    StandingsData = OTIAStandings;
  } else if (props.league === "OTIEU") {
    StandingsData = OTIEUStandings;
  } else if (props.league === "OTIEGG") {
    StandingsData = OTIEGGStandings;
  }

  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return <WinBox></WinBox>;
      case 1:
        return <LossBox></LossBox>;
      case 2:
        return <TieBox></TieBox>;
      case 3:
        return <WinBox></WinBox>;
      case 4:
        return <LossBox></LossBox>;
      default:
        console.log("");
    }
  };

  return (
    <SectionStyle>
      <Standing key={uuidv4()}>
        <Section key={uuidv4()}>
          <Header color={props.color}>
            <span>Team</span>
            <span>GP</span>
            <span>Wsss</span>
            <span>L</span>
            <span>CF</span>
            <span>CA</span>
            <span>CD</span>
          </Header>
          <TeamStats key={uuidv4()}>
            {StandingsData.map((item) => {
              return (
                <Team key={uuidv4()}>
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

        <Tiles key={uuidv4()}>
          <StreakHeader color={props.color}>Streak</StreakHeader>
          {StandingsData.map((item) => {
            let final = item.results.map((resultss) => {
              return resultss;
            });
            return (
              <TeamStreak key={uuidv4()}>
                {final.map((score) => (
                  <div key={uuidv4()}>{renderSwitch(score)}</div>
                ))}
              </TeamStreak>
            );
          })}
        </Tiles>
      </Standing>
    </SectionStyle>
  );
};

export default Standings;

const SectionStyle = styled.section`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 2vh;
  border-radius: 20px;
  margin-bottom: 3vh;
  @media (max-width: 850px) {
    width: 90vw;
  }
`;

const Standing = styled.section`
  display: flex;
  margin: 2vh 0;
  justify-content: center;
  @media (max-width: 1500px) {
    transform: scale(0.8, 0.8);
  }
  @media (max-width: 1200px) {
    transform: none;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-weight: bold;
  background-color: ${(props) => props.color};
  border-bottom: 1px solid black;

  span:first-child {
    min-width: 150px;
    margin-left: 4px;
    @media (max-width: 700px) {
      min-width: 100px;
      justify-content: normal;
    }
  }
  span {
    display: flex;
    margin-right: 10px;
    width: 28px;
    @media (max-width: 700px) {
      margin-right: 5px;
      display: flex;
      justify-content: center;
    }
  }
  span:nth-child(5) {
    @media (max-width: 450px) {
      display: none;
    }
  }
  span:nth-child(6) {
    @media (max-width: 450px) {
      display: none;
    }
  }
  span:nth-child(7) {
    @media (max-width: 350px) {
      display: none;
    }
  }
`;
const TeamStats = styled.div`
  justify-content: space-around;
  align-items: center;
  color: black;
  font-weight: bold;
  div {
    @media (max-width: 700px) {
      height: 75px;
    }
  }
  div:last-child {
    border-bottom: none;
  }
  div:nth-child(odd) {
    background-color: #a9a9a9;
  }
  div:nth-child(even) {
    background-color: #e1e1e1;
  }
`;
const Team = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid black;
  @media (max-width: 1200px) {
    justify-content: normal;
  }
  span:first-child {
    min-width: 150px;
    margin-left: 4px;
    @media (max-width: 700px) {
      min-width: 100px;
    }
  }
  span {
    margin-right: 10px;
    width: 28px;
    @media (max-width: 700px) {
      margin-right: 5px;
      display: flex;
      justify-content: center;
    }
  }
  span:nth-child(5) {
    @media (max-width: 450px) {
      display: none;
    }
  }
  span:nth-child(6) {
    @media (max-width: 450px) {
      display: none;
    }
  }
  span:nth-child(7) {
    @media (max-width: 350px) {
      display: none;
    }
  }
`;

const Tiles = styled.div`
  width: auto;
  border: 1px solid black;
  @media (max-width: 1200px) {
    border: none;
    display: none;
  }
`;
const StreakHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: auto;
  font-weight: bold;
  background-color: ${(props) => props.color};
  border-bottom: 1px solid black;
`;
const TeamStreak = styled.div`
  display: flex;
  align-items: center;

  div:nth-child(5n) {
    border-right: 3px solid black;
  }
  div:last-child {
    border-right: none;
  }
`;

const WinBox = styled.div`
  width: 18px;
  height: 50px;
  border: 1px solid black;
  background-color: #23c552;
`;

const LossBox = styled.div`
  width: 18px;
  height: 50px;
  border: 1px solid black;
  background-color: #f84f31;
`;

const TieBox = styled.div`
  width: 18px;
  height: 50px;
  border: 1px solid black;
  background-color: #e3e26a;
`;
