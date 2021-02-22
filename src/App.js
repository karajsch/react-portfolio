import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//importing pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

//importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="react-portfolio/" component={Home} />
          <Route exact path="react-portfolio/About">
            <About />
          </Route>
          <Route exact path="react-portfolio/Projects">
            <Projects />
          </Route>
          <Route exact path="react-portfolio/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
