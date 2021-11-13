import { lightBlue } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// Import Pages
import MLTP from "./pages/MLTP";

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
    <ThemeProvider theme={themes}>
      <MLTP />
    </ThemeProvider>
  );
}

export default App;
