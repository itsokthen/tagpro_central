import React from "react";
//Page Components
import Navbar from "../components/Navbar/Navbar";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import Standings from "../components/Standings/Standings";
import Sidebar from "../components/Sidebar/Sidebar";

const MLTP = () => {
  return (
    <div>
      <Navbar />
      <Scoreboard />
      <Standings />
      <Sidebar />
    </div>
  );
};

export default MLTP;
