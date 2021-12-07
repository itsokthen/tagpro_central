import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margine: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function InsertData() {
  const classes = useStyles();

  const [players, setPlayers] = useState({
    season: "",
    week: "",
    scoreA: "",
    scoreB: "",
  });
  return (
    <>
      <h2>Import Stats</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Season"
          variant="outlined"
          value={players.season}
        />
        <TextField
          id="outlined-basic"
          label="Week"
          variant="outlined"
          value={players.week}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={players.scoreA}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={players.scoreB}
        />
        <Button variant="contained">Submit</Button>
      </form>
    </>
  );
}
