import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import OTI from "../json/schedule/OTIScores.json";
import OTIA from "../json/schedule/OTIAScores.json";
import OTIEU from "../json/schedule/OTIEUScores.json";
import OTIEGG from "../json/schedule/OTIEGGScores.json";

import IMAGES from "../../logos/index.js";

const ScoreWeek = (props) => {
  let Results = false;
  if (props.league === "OTI") Results = OTI;
  else if (props.league === "OTIA") Results = OTIA;
  else if (props.league === "OTIEU") Results = OTIEU;
  else if (props.league === "OTIEGG") Results = OTIEGG;
  // console.log(Results[0][`${props.match}`]);

  return (
    <AllScores key={uuidv4()}>
      {Results &&
        Results[0][`${props.match}`][0].played &&
        Results[0][`${props.match}`].map((game, indexs) => {
          return (
            <Match key={uuidv4()}>
              <Teams key={uuidv4()}>
                <span></span>
                <span key={uuidv4()}>
                  <img
                    src={
                      IMAGES[
                        JSON.parse(JSON.stringify(game.Team1)).replace(
                          /\s/g,
                          ""
                        )
                      ]
                    }
                    alt="."
                  ></img>
                  {`${game.Team1}`}
                </span>
                <span key={uuidv4()}>
                  <img
                    src={
                      IMAGES[
                        JSON.parse(JSON.stringify(game.Team2)).replace(
                          /\s/g,
                          ""
                        )
                      ]
                    }
                    alt="."
                  ></img>
                  {`${game.Team2}`}
                </span>
              </Teams>
              <Scores key={uuidv4()}>
                <Games key={uuidv4()}>
                  {Results[0][`${props.match}`][indexs].results.map(
                    (score, index) => {
                      if (score.game.T1 !== false) {
                        return <span key={index}>{`G${index + 1}`} </span>;
                      } else
                        return <React.Fragment key={index}></React.Fragment>;
                    }
                  )}
                </Games>
                <div key={uuidv4()}>
                  {Results[0][`${props.match}`][indexs].results.map(
                    (score, index) => {
                      if (score.game.T1 !== false)
                        return (
                          <span
                            className={`${
                              score.game.T1 > score.game.T2 ? "Bold" : ""
                            }`}
                            key={uuidv4()}
                          >
                            {score.game.T1}{" "}
                          </span>
                        );
                      else
                        return <React.Fragment key={uuidv4()}></React.Fragment>;
                    }
                  )}
                </div>
                <div key={uuidv4()}>
                  {Results[0][`${props.match}`][indexs].results.map(
                    (score, index) => {
                      if (score.game.T1 !== false)
                        return (
                          <span
                            className={`${
                              score.game.T2 > score.game.T1 ? "Bold" : ""
                            }`}
                            key={uuidv4()}
                          >
                            {score.game.T2}{" "}
                          </span>
                        );
                      else
                        return <React.Fragment key={uuidv4()}></React.Fragment>;
                    }
                  )}
                </div>
              </Scores>
              <Summary key={game.summary}>{`${game.summary}`}</Summary>
            </Match>
          );
        })}
    </AllScores>
  );
};

const AllScores = styled.div`
  background-color: white;
  border-radius: 20px;
  margin-bottom: 2vh;
  div:last-child {
    border-bottom: none;
  }
`;

const Match = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  border-bottom: 1px solid black;
  flex-wrap: wrap;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 120px;
  padding-top: 45px;
  font-weight: bold;
  span:last-child {
    margin: 10px 0;
  }
  img {
    max-width: 30px;
    vertical-align: middle;
    max-height: 30px;
    margin-right: 10px;
  }
`;
const Scores = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
  padding-top: 20px;
  div:first-child {
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    span {
      min-width: 28px;
    }
  }
  @media (max-width: 550px) {
    width: auto;
  }
`;

const Games = styled.div`
  display: flex;
  font-weight: bold;
`;
const Summary = styled.div`
  width: 40%;
  min-width: 220px;
`;

export default ScoreWeek;
