import React from "react";
import TwitterFeed from "./twitter_feed";
import Announcements from './Announcements';

export default function() {
  return (
    <main>
        <Announcements />
        <TwitterFeed />
    </main>
  );
}
