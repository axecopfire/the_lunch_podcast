import React from "react";

function createMarkup(mu) {
  return { __html: mu };
}

export default function(prop) {
  let episode = prop.ep;
  console.log(episode);
  return (
    <article>
      <header>
        <h6>{episode.title}</h6>
      </header>
      <div className="episode" >
        <div className="description">
            <img src={episode.image} alt="" />
        </div>
        <div className="summary">
            <p dangerouslySetInnerHTML={createMarkup(episode.summary)} />
        </div>
      </div>
      <audio controls>
          <source src={episode.enclosure} />
      </audio>
    </article>
  );
}

// "title",
//       "description",
//       "link",
//       "pubDate",
//       "enclosure",
//       "summary",
//       "image"
