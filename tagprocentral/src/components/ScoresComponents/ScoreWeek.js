import React from "react";
import styled from "styled-components";
import OTI from "../json/schedule/OTIScores.json";
import OTIA from "../json/schedule/OTIAScores.json";
import OTIEU from "../json/schedule/OTIEUScores.json";

const ScoreWeek = (props) => {
  console.log(props.league);
  let Results = false;
  if (props.league === "OTI") Results = OTI;
  else if (props.league === "OTIA") Results = OTIA;
  else if (props.league === "OTIEU") Results = OTIEU;

  return (
    <AllScores>
      {Results &&
        Results[0][`${props.match}`][0].played &&
        Results[0][`${props.match}`].map((game) => {
          return (
            <Match key={game.Team1}>
              <Teams>
                <span>{`${game.Team1}`}</span>
                <span>{`${game.Team2}`}</span>
              </Teams>
              <Scores>
                <Games>
                  {Results[0][`${props.match}`][0].results.map(
                    (score, index) => {
                      if (score.game.T1 !== false) {
                        return <span>{`G${index + 1}`} </span>;
                      } else return "";
                    }
                  )}
                </Games>
                <div>
                  {Results[0][`${props.match}`][0].results.map((score) => {
                    if (score.game.T1 !== false)
                      return (
                        <span
                          className={`${
                            score.game.T1 > score.game.T2 ? "Bold" : ""
                          }`}
                          key={score.match}
                        >
                          {score.game.T1}{" "}
                        </span>
                      );
                    else return "";
                  })}
                </div>
                <div>
                  {Results[0][`${props.match}`][0].results.map((score) => {
                    if (score.game.T1 !== false)
                      return (
                        <span
                          className={`${
                            score.game.T2 > score.game.T1 ? "Bold" : ""
                          }`}
                          key={score.match}
                        >
                          {score.game.T2}{" "}
                        </span>
                      );
                    else return "";
                  })}
                </div>
              </Scores>
              <Summary>{`${game.summary}`}</Summary>
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
  padding: 0 5vw;
  border-bottom: 1px solid black;
  flex-wrap: wrap;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 100px;
  span {
    margin: 10px 0;
    font-weight: bold;
  }
`;
const Scores = styled.div`
  width: 30%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
  div {
    display: flex;
    justify-content: space-around;
    span {
      min-width: 20px;
    }
  }
`;

const Games = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: space-around;
`;
const Summary = styled.div`
  width: 40%;
  min-width: 220px;
`;

export default ScoreWeek;
