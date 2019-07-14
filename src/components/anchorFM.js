import React from 'react';
import logo from '../the_lunch_podcast_logo.png';

export default class AnchorFM extends React.Component {
    render () {
        return (
            <a href="https://anchor.fm/the-lunch-podcast">
                <div className="hover-effect">
                    <p>Listen to the Podcast</p>
                </div>
                <img src={logo} 
                // className="App-logo" 
                alt="logo" />
            </a>
        );
    }
}