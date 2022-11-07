import React from "react";
import styled from "styled-components";

import TeamComponent from "./TeamComponent";
import OTITeams from "../json/Teams/OTIteams.json";
import OTIATeams from "../json/Teams/OTIAteams.json";
import OTIEUTeams from "../json/Teams/OTIEUteams.json";
import OTIEGGTeams from "../json/Teams/OTIEGGteams.json";

const Teams = (props) => {
  let TeamNames = false;
  if (props.league === "OTI") TeamNames = OTITeams;
  else if (props.league === "OTIA") TeamNames = OTIATeams;
  else if (props.league === "OTIEU") TeamNames = OTIEUTeams;
  else if (props.league === "OTIEGG") TeamNames = OTIEGGTeams;

  return (
    <>
      <div>
        <Teamsdiv>
          {TeamNames &&
            TeamNames[0].teams.map((item) => (
              <TeamComponent
                key={item.teamname}
                teamname={item.teamname}
                player1={item.player1}
                value1={item.value1}
                player2={item.player2}
                value2={item.value2}
                player3={item.player3}
                value3={item.value3}
                player4={item.player4}
                value4={item.value4}
                player5={item.player5}
                value5={item.value5}
                player6={item.player6}
                value6={item.value6}
                bgcolor={item.bgcolor}
                captain={item.captain}
              />
            ))}
        </Teamsdiv>
      </div>
    </>
  );
};

const Teamsdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  min-width: 80vw;
  margin: 2vh 0;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`;
export default Teams;
