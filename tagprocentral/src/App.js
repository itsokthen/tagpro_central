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
  const MLTP = {
    league: "MLTP",
    color: "#3498db",
  };
  const NLTP = {
    league: "NLTP",
    color: "#e67e22",
  };
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/MLTP">
          <League name={MLTP} />
        </Route>
        <Route path="/NLTP">
          <League name={NLTP} />
        </Route>
        <Route path="/ELTP">
          <ELTP />
        </Route>
        <Route path="/OLTP">
          <OLTP />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
