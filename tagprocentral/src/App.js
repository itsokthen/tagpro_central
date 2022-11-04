import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import Home from "./pages/Home";
import Admin from "./pages/admin";
import League from "./pages/League";
import { SeasonContextProvidor } from "./components/context/SeasonContext";

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
    OTHER: {
      league: "OTHER",
      color: "#9347c9",
    },
  };
  return (
    <SeasonContextProvidor>
      <GlobalStyle />
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home info={LeagueInfo} league="OTHER" />
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
    </SeasonContextProvidor>
  );
}

export default App;
