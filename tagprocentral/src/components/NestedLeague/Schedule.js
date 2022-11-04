import React from "react";
import styled from "styled-components";

const Schedule = () => {
  return (
    <ScheduleStyle>
      <TeamsStyle>Schedule</TeamsStyle>
      <TeamsStyle>hi</TeamsStyle>
      <TeamsStyle>Schedule</TeamsStyle>
      <TeamsStyle>hi</TeamsStyle>
      <TeamsStyle>Schedule</TeamsStyle>
      <TeamsStyle>hi</TeamsStyle>
      <TeamsStyle>Schedule</TeamsStyle>
      <TeamsStyle>hi</TeamsStyle>
    </ScheduleStyle>
  );
};

const ScheduleStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15%;
  align-items: center;
`;

const TeamsStyle = styled.div`
  min-width: 200px;
  height: 100px;
  border: 1px solid;
  margin: 0 20px;
`;

export default Schedule;
