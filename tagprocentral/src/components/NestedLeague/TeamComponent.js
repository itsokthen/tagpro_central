import React from "react";
import styled from "styled-components";
import tagpro from "../../images/tagproPUP.png";
import rolling from "../../images/rollingPUP.png";
import jukejuice from "../../images/jukejuicePUP.png";
import topspeed from "../../images/topspeedPUP.png";
import tagproBomb from "../../images/crown_1.png";

const TeamComponent = (props) => {
  return (
    <Team bgcolor={props.bgcolor}>
      <Teamname bgcolor={props.bgcolor}>{props.teamname}</Teamname>
      <PlayerList>
        <Title>
          <Player>Player</Player>
          <Value>Value</Value>
        </Title>

        <Title>
          <Players>
            <img src={tagpro} alt="."></img> {props.player1}
          </Players>
          <Value>{props.value1}</Value>
        </Title>
        <Title>
          <Players>
            <img src={rolling} alt="."></img> {props.player2}
          </Players>
          <Value>{props.value2}</Value>
        </Title>
        <Title>
          <Players>
            <img src={jukejuice} alt="."></img> {props.player3}
          </Players>
          <Value>{props.value3}</Value>
        </Title>
        <Title>
          <Players>
            <img src={topspeed} alt="."></img> {props.player4}
          </Players>
          <Value>{props.value4}</Value>
        </Title>
        {props.player5 && (
          <Title>
            <Players>
              <img src={topspeed} alt="."></img> {props.player5}
            </Players>
            <Value>{props.value5}</Value>
          </Title>
        )}
        {props.player5 && (
          <Title>
            <Players>
              <img src={topspeed} alt="."></img> {props.player6}
            </Players>
            <Value>{props.value6}</Value>
          </Title>
        )}
        {props.captain && (
          <Title>
            <Players>
              <img src={tagproBomb} alt="."></img> {props.captain}
            </Players>
            <Value>GM</Value>
          </Title>
        )}
      </PlayerList>
    </Team>
  );
};

const Team = styled.div`
  width: 370px;
  margin: 10px;
  font-weight: bold;
  color: black;
  overflow: hidden;
`;
const Teamname = styled.div`
  padding: 0 15px;
  border: 2px solid;
  border-bottom: none;
  background-color: ${(props) => props.bgcolor};

  text-align: center;
  font-size: 200%;
  color: black;
  -webkit-text-stroke: 1px #fff;
  overflow: hidden;
  border-bottom: 3px solid black;
`;
const PlayerList = styled.ul`
  border: 2px solid;
  border-top: none;
  list-style-type: none;
  float: none;
  background-color: #fff;
  overflow: hidden;
`;
const Title = styled.div`
  display: flex;
  margin: 0 15px;
`;
const Player = styled.div`
  display: inline-block;
  width: 70%;
`;
const Value = styled.div`
  display: inline-block;
  width: 20%;
  text-align: center;
`;

const Players = styled.li`
  display: inline-block;
  width: 70%;
  font-size: 125%;
  img {
    width: 16px;
    vertical-align: middle;
  }
`;

export default TeamComponent;
