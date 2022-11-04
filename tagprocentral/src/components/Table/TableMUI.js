import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useContext } from "react";

import SeasonStats from "../../apis/SeasonStats";
import { SeasonContext } from "../context/SeasonContext";

export default function TableMUI(props) {
  const { games, setGames } = useContext(SeasonContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SeasonStats.get("/");
        setGames(response.data.data.series);
        console.log(`hiiiiiiiiiiiiiiii ${JSON.stringify(games[0])}`);
      } catch (err) {}
    };

    fetchData();
    console.log(`sssss ${games}`);
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="right">Caps</TableCell>
              <TableCell align="right">Hold</TableCell>
              <TableCell align="right">Returns</TableCell>
              <TableCell align="right">Prevent</TableCell>
              <TableCell align="right">Pops</TableCell>
              <TableCell align="right">Pups</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.game1[0].Player}
                </TableCell>
                <TableCell align="right">
                  {row.game1[0].Caps +
                    row.game1[1].Caps +
                    row.game1[2].Caps +
                    row.game1[3].Caps}
                </TableCell>
                <TableCell align="right">
                  {row.game1[0].Hold +
                    row.game1[1].Hold +
                    row.game1[2].Hold +
                    row.game1[3].Hold}
                </TableCell>
                <TableCell align="right">
                  {row.game1[0].Returns +
                    row.game1[1].Returns +
                    row.game1[2].Returns +
                    row.game1[3].Returns}
                </TableCell>
                <TableCell align="right">
                  {row.game1[0].Prevent +
                    row.game1[1].Prevent +
                    row.game1[2].Prevent +
                    row.game1[3].Prevent}
                </TableCell>
                <TableCell align="right">
                  {row.game1[0].Pops +
                    row.game1[1].Pops +
                    row.game1[2].Pops +
                    row.game1[3].Pops}
                </TableCell>
                <TableCell align="right">
                  {row.game1[0].Pups +
                    row.game1[1].Pups +
                    row.game1[2].Pups +
                    row.game1[3].Pups}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
