import React from "react";
//Page Components
import Navbar from "../components/Navbar/Navbar";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Standings from "../components/Standings/Standings";

const MLTP = () => {
  return (
    <div>
      <Navbar />
      <Scoreboard />
      <Standings />
    </div>
  );
};

export default MLTP;
