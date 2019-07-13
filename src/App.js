import React from 'react';
import './App.css';
import TwitterFeed from './components/twitter_feed';
import AnchorFM from './components/anchorFM';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clipboards from "./components/clipboards";
import Rss from './components/rss';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/clipboard" component={Clipboards} />
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
      <Rss />
    </div>
  );
}

export default App;
