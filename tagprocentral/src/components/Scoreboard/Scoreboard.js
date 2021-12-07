import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import { style } from "@mui/system";

//Page Components
import Recent_Games from "../Scoreboard/Recent_Games";
<link
  rel="stylesheet"
  type="text/css"
  href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
/>;

const useStyles = makeStyles({
  card: {
    borderStyle: "solid",
  },
  scoreCarousel: {
    width: "100%",
    margin: "auto",
    overflow: "auto",
  },
});

const Scoreboard = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.scoreCarousel} sx={{ flexGrow: 1 }}>
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
    </>
  );
};

export default Scoreboard;
