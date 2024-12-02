import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "../../../components/About";
import Contact from "../../../components/Contact";
import Home from "../../../components/Home";
import NoMatch from "../../../components/NoMatch";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
