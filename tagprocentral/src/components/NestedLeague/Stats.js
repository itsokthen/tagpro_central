import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import OTIEUStats from "../json/Stats/OTIEUStats.json";
import OTIEGGStats from "../json/Stats/OTIEGGStats.json";
import OTIStats from "../json/Stats/OTIStats.json";
import OTIAStats from "../json/Stats/OTIAStats.json";

const Stats = (props) => {
  let League = false;
  if (props.league === "OTIEGG") League = OTIEGGStats;
  else if (props.league === "OTIEU") League = OTIEUStats;
  else if (props.league === "OTI") League = OTIStats;
  else if (props.league === "OTIA") League = OTIAStats;

  return (
    <Container>
      <TableSize>
        {/* Table for EGG Stats */}
        {League === OTIEGGStats && (
          <Table color={props.color}>
            <thead color={props.color}>
              <tr>
                {/* <th>#</th> */}
                <th>Player</th>
                <th>Min</th>
                <th>+/-</th>
                <th>Hold</th>
                <th>Caps</th>
                <th>Comp</th>
                <th>Rec</th>
                <th>Picks</th>
                <th>Tags</th>
                <th>Ints</th>
                <th>Tagged</th>
                <th>Raps Th</th>
                <th>Raps Ct</th>
                <th>TkAw</th>
                <th>TrnO</th>
              </tr>
            </thead>
            <tbody key={uuidv4()}>
              {League.map((item) => {
                return (
                  <tr key={uuidv4()}>
                    {/* <td>{item.#}</td> */}
                    <th color={props.color} style={{ fontWeight: "bold" }}>
                      {item.Player}
                    </th>
                    <td>{Math.round(item.Minutes)}</td>
                    <td>{item.PD}</td>
                    <td>{Math.round(item.Hold)}</td>
                    <td>{item.Captures}</td>
                    <td>{item.Completions}</td>
                    <td>{item.Receptions}</td>
                    <td>{item["Ints Caught"]}</td>
                    <td>{item["Ints Thrown"]}</td>
                    <td>{item.Tags}</td>
                    <td>{item.Tagged}</td>
                    <td>{item["Raptors Thrown"]}</td>
                    <td>{item["Raptors Caught"]}</td>
                    <td>{item["Takeaways"]}</td>
                    <td>{item["Turnovers"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
        {/* Table for Traditional CTF */}
        {(League === OTIStats ||
          League === OTIEUStats ||
          League === OTIAStats) && (
          <Table color={props.color}>
            <thead color={props.color}>
              <tr>
                {/* <th>#</th> */}
                <th color={props.color}>Player</th>
                <th>Team</th>
                <th>Min</th>
                <th>+/-</th>
                <th>Caps</th>
                <th>Grabs</th>
                <th>Hold</th>
                <th>Drops</th>
                <th>Pops</th>
                <th>Rets</th>
                <th>Tags</th>
                <th>Prev</th>
                <th>Pups</th>
              </tr>
            </thead>
            <tbody key={uuidv4()}>
              {League.map((item) => {
                return (
                  <tr key={uuidv4()}>
                    {/* <td>{item.#}</td> */}
                    <th style={{ fontWeight: "bold" }}>{item.Player}</th>
                    <td>{item.Team}</td>
                    <td>{item.Min}</td>
                    <td>{item["+/-"]}</td>
                    <td>{item.Caps}</td>
                    <td>{item.Grabs}</td>
                    <td>{Math.round(item.Hold)}</td>
                    <td>{item.Drops}</td>
                    <td>{item.Pops}</td>
                    <td>{item.Rets}</td>
                    <td>{item.Tags}</td>
                    <td>{item.Prev}</td>
                    <td>{item.Pups}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </TableSize>
    </Container>
  );
};

const Container = styled.section`
  width: 60vw;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  margin-top: 2vh;
  margin-bottom: 3vh;
  overflow: auto;
  flex-wrap: nowrap;
  @media (max-width: 1150px) {
    align-items: normal;
    font-size: 80%;
  }
  @media (max-width: 850px) {
    width: 90vw;
  }
`;

const TableSize = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 90%;
  text-align: center;

  thead tr th:first {
    position: sticky;
    top: 0;
  }

  thead th:first-child {
    position: sticky;
    left: 0;
    z-index: 2;
    border-right: 1px solid black;
    background-color: ${(props) => props.color};
  }
  thead th {
    padding: 3px;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 25vw;
    background-color: ${(props) => props.color};
  }

  tbody th {
    position: sticky;
    left: 0;
    background: white;
    z-index: 1;
    border-right: 1px solid black;
  }

  tbody tr:nth-child(odd) {
    th {
      background-color: #a9a9a9;
    }
  }
  tbody tr:nth-child(even) {
    th {
      background-color: #e1e1e1;
    }
  }

  // --------------

  thead tr {
    background-color: ${(props) => props.color};
  }
  tbody tr:nth-child(odd) {
    background-color: #a9a9a9;
  }
  tbody tr:nth-child(even) {
    background-color: #e1e1e1;
  }
`;

export default Stats;
