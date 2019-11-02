import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Clipboards from "./components/clipboards";
import Rss from './components/rss';
import Home from './components/home';
import AppHeader from './components/Header';

function App() {

  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Route path="/clipboard" component={Clipboards} />
        <Route path="/episodes" component={Rss} />
        <Route path="/" exact component={Home} />
      </Router>
      
    </div>
  );
}

export default App;
