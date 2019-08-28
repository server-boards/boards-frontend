import React from "react";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createTheme from "@material-ui/core/styles/createMuiTheme";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import NavBar from "./components/navbar";
// Pages
import Landing from "./pages/landing";
import Home from "./pages/home";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
