import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import { Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material";
//Page Components
import Navbar from "../components/Navbar/Navbar";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Standings from "../components/Standings/Standings";
<<<<<<< HEAD
import Sidebar from "../components/Sidebar/Sidebar";
=======
import Leaders from "../components/Leaders/Leaders";
import NextGame from "../components/Upcoming/NextGame";
import NextGameBox from "../components/Upcoming/NextGameBox";
import { textAlign } from "@mui/system";

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))
>>>>>>> c37487b (changes)

const MLTP = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default MLTP;
