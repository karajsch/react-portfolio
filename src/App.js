import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//importing pages
import About from "./components/pages/About";
import Projects from "./components/pages/Project";
import Contact from "./components/pages/Contact";
//importing components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
