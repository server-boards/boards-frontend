import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import NavBar from "./components/navbar";
// Pages
import Landing from "./pages/landing";
import Home from "./pages/home";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
      </Router>
    </>
  );
}

export default App;
