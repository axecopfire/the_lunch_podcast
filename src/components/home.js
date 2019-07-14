import React from "react";
import TwitterFeed from "./twitter_feed";
import AnchorFM from "./anchorFM";

export default function() {
  return (
    <main>
      <section className="social-media">
        <AnchorFM />
      </section>
      <section className="twitter-feed">
        <TwitterFeed />
      </section>
    </main>
  );
}
