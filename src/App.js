import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Clipboards from "./components/Clipboard/clipboards";
import Rss from "./components/rss";
import Home from "./components/home";
import AppHeader from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Route path="/clipboard" component={Clipboards} />
        <Route path="/episodes" component={Rss} />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
