import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import Home from "./pages/Home";
import Admin from "./pages/admin";
import League from "./pages/League";
import { SeasonContextProvidor } from "./components/context/SeasonContext";

function App() {
  const LeagueInfo = {
    OTI: {
      league: "OTI",
      // color: "#3498db",
      color: "#00db96",
    },
    OTIA: {
      league: "OTIA",
      // color: "#e67e22",
      color: "#49297e",
    },
    OTIEU: {
      league: "OTIEU",
      // color: "#c0392b",
      color: "#90dcff",
    },
    OTIEGG: {
      league: "OTIEGG",
      color: "#e10086",
      // color: "#27ae60",
    },
    OTHER: {
      league: "OTHER",
      color: "#fdfb76",
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
          <Route path="/OTI">
            <League info={LeagueInfo} league="OTI" />
          </Route>
          <Route path="/OTIA">
            <League info={LeagueInfo} league="OTIA" />
          </Route>
          <Route path="/OTIEU">
            <League info={LeagueInfo} league="OTIEU" />
          </Route>
          <Route path="/OTIEGG">
            <League info={LeagueInfo} league="OTIEGG" />
          </Route>
        </Switch>
      </Router>
    </SeasonContextProvidor>
  );
}

export default App;
