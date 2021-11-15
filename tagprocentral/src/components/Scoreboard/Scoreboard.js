import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//Page Components
import Recent_Games from "../Scoreboard/Recent_Games";

const Scoreboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} justifyContent="flex-start" wrap="nowrap">
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
        <Grid item xs>
          <Recent_Games />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Scoreboard;
