import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero"
//import pages and components


function App() {
  return (
    <Router>
      <div>
        <Hero backgroundImage="./teamwork.jpg">
          <h1>My Employee Dashboard</h1>
        </Hero>

      </div>
    </Router>
  );
}

export default App;
