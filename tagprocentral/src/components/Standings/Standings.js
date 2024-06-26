import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

function createData(rank, name, points, wins, otw, otl, losses, plusminus) {
  return { rank, name, points, wins, otw, otl, losses, plusminus };
}

const rows = [
  createData(1, "Mumble Cappers", 31, 10, 0, 1, 3, 52),
  createData(2, "Snipe Hunt", 31, 10, 0, 1, 3, 30),
  createData(3, "CircleJukers", 23, 7, 1, 0, 6, 1),
  createData(4, "ALL CAPS", 20, 6, 1, 0, 7, -6),
  createData(5, "Willy MonkaS and the Chocolate Factor-Re", 19, 6, 0, 0, 8, 15),
  createData(6, "Holdin' Gate Warriors", 17, 5, 1, 0, 8, -8),
  createData(7, "Ghostboosters", 15, 5, 0, 0, 9, -20),
  createData(8, "Miami Ballphins", 13, 4, 0, 1, 9, -64),
];

export default function Standings() {
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/players").then((allPlayers) => {
      setPlayersList(allPlayers.data);
    });
  }, []);

  return (
    <TableContainer sx={({ maxWidth: 700 }, {})}>
      <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Wins</TableCell>
            <TableCell align="center">OTW</TableCell>
            <TableCell align="center">OTL</TableCell>
            <TableCell align="center">Losses</TableCell>
            <TableCell align="center">+/-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.points}</TableCell>
              <TableCell align="center">{row.wins}</TableCell>
              <TableCell align="center">{row.otw}</TableCell>
              <TableCell align="center">{row.otl}</TableCell>
              <TableCell align="center">{row.losses}</TableCell>
              <TableCell align="center">{row.plusminus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
