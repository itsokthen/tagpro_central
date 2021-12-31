import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import { style } from "@mui/system";

const useStyles = makeStyles({
    card: {
      borderStyle: "solid",
      maxWidth: "150px"
    }
  });

export default function NextGameBox() {
    const classes = useStyles();
    return(
        <div className={classes.card}>
            <h5>HGW______9:00 ET</h5>
            <h5>RKT______twitch</h5>
        </div>
    )
}