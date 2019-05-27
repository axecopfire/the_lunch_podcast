import React from 'react';

export default class TwitterFeed extends React.Component {
    render() {
        return  (
            <a className="twitter-timeline" data-width="300" data-height="500" data-theme="dark" href="https://twitter.com/LunchPodcastLOL?ref_src=twsrc%5Etfw">Tweets by LunchPodcastLOL</a>
        );
    }
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
    
        document.body.appendChild(script);
    }
}