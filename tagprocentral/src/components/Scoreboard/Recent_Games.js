import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core";
import { style } from "@mui/system";

const useStyles = makeStyles({
  card: {
    borderStyle: "solid",
  },
  scoreCarousel: {
    maxWidth: "100px",
  },
});

function createData(name, game1, game2) {
  return { name, game1, game2 };
}

const rows = [createData("RNK", 12, 8), createData("HGW", 4, 4)];

export default function DenseTable() {
  const classes = useStyles();
  return (
    <>
      <TableContainer
        className={classes.card}
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
          maxWidth: 160,
        }}
        component={Paper}
      >
        <Table sx={{ maxWidth: 150 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Final</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.game1}</TableCell>
                <TableCell align="right">{row.game2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
