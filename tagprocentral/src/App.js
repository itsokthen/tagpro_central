import { lightBlue } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Pages
import MLTP from "./pages/MLTP";
import Admin from "./pages/admin";

const themes = createTheme({
  palette: {
    primary: lightBlue,
  },
  typography: {
    button: {
      fontSize: "2.3rem",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={themes}>
        <Switch>
          <Route exact path="/">
            <MLTP />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
