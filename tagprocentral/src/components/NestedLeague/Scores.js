import React, { PureComponent } from "react";
import styled from "styled-components";

const Scores = () => {
  return (
    <>
      <SectionStyle>
        <ScoreSummary>
          <ScoreBoard>Score</ScoreBoard>
          <Summary>Summary</Summary>
        </ScoreSummary>
        <LinkStyle>Links</LinkStyle>
      </SectionStyle>
    </>
  );
};

const SectionStyle = styled.section`
  max-width: 900px;
  position: relative;
  display: flex;
  border: 1px solid black;
`;

const ScoreSummary = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  border: 1px solid red;
`;

const LinkStyle = styled.section`
  width: 120px;
  position: relative;
  display: flex;
  border: 1px solid yellow;
`;

const ScoreBoard = styled.section`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  border: 1px solid blue;
`;

const Summary = styled.section`
  width: 220px;
  position: relative;
  display: flex;
  border: 1px solid green;
`;

export default Scores;
