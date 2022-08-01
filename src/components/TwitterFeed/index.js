import React from "react";

export default class extends React.Component {
  render() {
    return (
      <section className="twitter">
        <a
          className="twitter-timeline"
          data-theme="dark"
          href="https://twitter.com/LunchPodcastLOL?ref_src=twsrc%5Etfw"
        >
          Tweets by LunchPodcastLOL
        </a>
      </section>
    );
  }
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }
}
