import React from 'react';
import logo from '../the_lunch_podcast_logo.png';

export default class AnchorFM extends React.Component {
    render () {
        return (
            <a href="/Episodes">
                <img src={logo} 
                // className="App-logo" 
                alt="logo" />
                <p>Listen to the Podcast</p>
            </a>
        );
    }
}