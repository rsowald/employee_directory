import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero"
//import pages and components


function App() {
  return (
    <Router>
      <div>
        <Hero backgroundImage="./teamwork.jpg" />

      </div>
    </Router>
  );
}

export default App;
