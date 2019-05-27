import React from 'react';
import logo from './the_lunch_podcast_logo.png';
import './App.css';
import TwitterFeed from './components/twitter_feed';

function App() {

  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} 
      // className="App-logo" 
      alt="logo" />
      <h1>The Lunch Podcast</h1>
      <TwitterFeed />
    </header>
  </div>
  );
}

export default App;
