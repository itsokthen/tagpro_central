import { lightBlue } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import MLTP from "./pages/MLTP";
import Admin from "./pages/admin";

function App() {
  return (
      <Router>
      <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <MLTP />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
