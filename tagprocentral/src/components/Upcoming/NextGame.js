import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@material-ui/core";
import FlagIcon from "@mui/icons-material/Flag";

function createData(teamA, teamB, time, stream) {
  return {teamA, teamB, time, stream};
}

const rows = [
  createData("HGW", "RNK", "9:00 EST", <FlagIcon/>),
  createData("HGW", "RNK", "9:00 EST", <FlagIcon/>),
  createData("HGW", "RNK", "9:00 EST", <FlagIcon/>),
  createData("HGW", "RNK", "9:00 EST", <FlagIcon/>),
];

export default function NextGame() {
  return (
    <TableContainer  sx={({ maxWidth: 700 }, {})}>
      <Table sx={{ maxWidth: 450 }} size="small" aria-label="a dense table">
      <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center">{row.teamA}</TableCell>
              <TableCell align="center">{row.teamB}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.stream}</TableCell>
            </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}
