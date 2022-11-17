import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
// import Home from "./pages/Home";
// import Admin from "./pages/admin";
import League from "./pages/League";
import { SeasonContextProvidor } from "./components/context/SeasonContext";

function App() {
  const LeagueInfo = {
    OTI: {
      league: "OTI",
      // color: "#3498db",
      //color: "#00db96",
      color: "#008E97",
    },
    OTIA: {
      league: "OTIA",
      // color: "#e67e22",
      //color: "#49297e",
      color: "#FC4C02",
    },
    OTIEU: {
      league: "OTIEU",
      // color: "#c0392b",
      //color: "#90dcff",
      color: "#4F2683",
    },
    OTIEGG: {
      league: "OTIEGG",
      //color: "#e10086",
      // color: "#27ae60",
      color: "#FFC62F",
    },
    OTHER: {
      league: "OTHER",
      color: "#d4d263",
    },
  };
  return (
    <SeasonContextProvidor>
      <GlobalStyle />
      <Router>
        <GlobalStyle />
        <Switch>
          <Redirect exact from="/" to="/OTI/Scores/match1" />
          {/* <Route path="/admin">
            <Admin />
          </Route> */}
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
          <Route path="*">
            <League info={LeagueInfo} league="OTHER" />
          </Route>
        </Switch>
      </Router>
    </SeasonContextProvidor>
  );
}

export default App;
