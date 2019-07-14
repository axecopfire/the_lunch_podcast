import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Clipboards from "./components/clipboards";
import Rss from './components/rss';
import Home from './components/home';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a href="/" ><h1>The Lunch Podcast</h1></a>
      </header>
      <Router>
        <Route path="/clipboard" component={Clipboards} />
      </Router>
      <Router>
        <Route path="/episodes" component={Rss} />
      </Router>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
      
    </div>
  );
}

export default App;
