import React from "react";
import {AppBar, Tabs, Tab, Toolbar, Typography} from '@material-ui/core'


const Navbar = () => {
  return (
    
      <AppBar color='primary'>
        <Toolbar>
          <Tabs>
            <Tab   label='MLTP'/>
            <Tab   label='NLTP'/>
            <Tab   label='ELTP'/>
            <Tab   label='OLTP'/>
          </Tabs>
        </Toolbar>
      </AppBar>
    
  );
};

export default Navbar;
