import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={() => <p>Landing</p>} />
      <Route path="/home" component={() => <p>Home</p>} />
    </Router>
  );
}

export default App;
