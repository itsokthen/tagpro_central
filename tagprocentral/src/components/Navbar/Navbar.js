import React from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@material-ui/core";
import FlagIcon from "@mui/icons-material/Flag";

const Navbar = () => {
  return (
    <AppBar color="primary" style={{ position: "relative" }}>
      <Toolbar>
        <FlagIcon />
        <Tabs>
          <Tab label="MLTP" />
          <Tab label="NLTP" />
          <Tab label="ELTP" />
          <Tab label="OLTP" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
