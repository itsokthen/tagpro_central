import { lightBlue } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import Home from "./pages/Home";
import MLTP from "./pages/MLTP";
import NLTP from "./pages/NLTP";
import ELTP from "./pages/ELTP";
import OLTP from "./pages/OLTP";

import Admin from "./pages/admin";
import League from "./pages/League";

function App() {
  const LeagueInfo = {
    MLTP: {
      league: "MLTP",
      color: "#3498db",
    },
    NLTP: {
      league: "NLTP",
      color: "#e67e22",
    },
    ELTP: {
      league: "ELTP",
      color: "#c0392b",
    },
    OLTP: {
      league: "OLTP",
      color: "#27ae60",
    },
  };
  const MLTP = {
    league: "MLTP",
    color: "#3498db",
  };
  const NLTP = {
    league: "NLTP",
    color: "#e67e22",
  };
  const ELTP = {
    league: "ELTP",
    color: "#c0392b",
  };
  const OLTP = {
    league: "OLTP",
    color: "#27ae60",
  };
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home info={LeagueInfo} />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/MLTP">
          <League info={LeagueInfo} league="MLTP" />
        </Route>
        <Route path="/NLTP">
          <League info={LeagueInfo} league="NLTP" />
        </Route>
        <Route path="/ELTP">
          <League info={LeagueInfo} league="ELTP" />
        </Route>
        <Route path="/OLTP">
          <League info={LeagueInfo} league="OLTP" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
