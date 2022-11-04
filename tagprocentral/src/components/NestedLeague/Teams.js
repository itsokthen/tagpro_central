import React from "react";
import styled from "styled-components";

import TeamComponent from "./TeamComponent";
const Teams = () => {
  return (
    <>
      <div>
        <Teamsdiv>
          <TeamComponent
            teamname="okthenos"
            player1="okthen"
            value1="C"
            player2="Wayne"
            value2="1st"
            player3="NEB."
            value3="8th"
            player4="aaron"
            value4="9th"
            bgcolor="#0ad0f7"
          />
          <TeamComponent
            teamname="mexos"
            player1="mex"
            value1="C"
            player2="Doris"
            value2="2nd"
            player3="BALLDON'TLIE"
            value3="7th"
            player4="Messi"
            value4="10th"
            bgcolor="#f7900a"
          />
          <TeamComponent
            teamname="DTos"
            player1="DT"
            value1="C"
            player2="Curry"
            value2="3rd"
            player3="jig"
            value3="6th"
            player4="glob."
            value4="11th"
            bgcolor="#361f02"
          />
          <TeamComponent
            teamname="WarriOs"
            player1="Warriors"
            value1="C"
            player2="kool aid"
            value2="4th"
            player3="thenewguy."
            value3="5th"
            player4="CarrotCake"
            value4="12th"
            bgcolor="#e3ca10"
          />
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
  margin: 50px auto;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`;
export default Teams;
