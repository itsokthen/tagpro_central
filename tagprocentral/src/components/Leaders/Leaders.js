import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, gasp, caps, hold, returns, prevent) {
  return { name, gasp, caps, hold, returns, prevent};
}

const rows = [
  createData("ggb", 10.0, 50, 3000, 100, 800),
  createData("airmigo", 9.9, 40, 2344, 90, 840),
  createData("dodsfall", 9.8, 30, 3456, 130, 809),
  createData("wanye", 9.8, 20, 2345, 190, 880),
  createData("koolaid", 9.8, 10, 3000, 300, 890),
];


export default function Leaders() {
  return (
    <TableContainer  sx={({ maxWidth: 700 }, {})}>
      <Table sx={{ maxWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Players</TableCell>
            <TableCell align="center">GASP</TableCell>
            <TableCell align="center">Caps</TableCell>
            <TableCell align="center">Hold</TableCell>
            <TableCell align="center">Returns</TableCell>
            <TableCell align="center">Prevent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.gasp}</TableCell>
              <TableCell align="center">{row.caps}</TableCell>
              <TableCell align="center">{row.hold}</TableCell>
              <TableCell align="center">{row.returns}</TableCell>
              <TableCell align="center">{row.prevent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
