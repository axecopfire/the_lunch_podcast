import React from 'react';
import './App.css';
import TwitterFeed from './components/twitter_feed';
import AnchorFM from './components/anchorFM';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clipboard from "./components/clipboard";

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/clipboard" component={Clipboard} />
      </Router>
      <header className="App-header">
        <h1>The Lunch Podcast</h1>
      </header>
      <section className="social-media" >
        <AnchorFM />
      </section>
      <section className="twitter-feed">
        <TwitterFeed />
      </section>
    </div>
  );
}

export default App;
