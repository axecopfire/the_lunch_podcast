import React from "react";
import TwitterFeed from "./TwitterFeed";
import Announcements from "./Announcements";

export default function () {
  return (
    <main className="home">
      <section>
        <div className="jumbotron">
          <h1>Lunch Podcast!</h1>
          <p>
            This is the lunch podcast. Its damn good. Led by 2 geniuses who know
            everything there is to know about lunch. This show is like Tony
            Robbins shit, but for lunch. You'll wake up everyday wanting to
            sieze the fuck out of your destiny cause u know that lunch is just a
            few short hours away.
          </p>
        </div>
      </section>
      <Announcements />
      <TwitterFeed />
    </main>
  );
}
