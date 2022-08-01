import React from "react";
import styles from "./about.module.css";
import casey from "../../static/Casey_profile.jpg";
import alex from "../../static/Alex_profile.jpg";
import logo from "../../static/the_lunch_podcast_logo.png";

export default function () {
  return (
    <section className={styles.about}>
      <div className={styles.fixed}>
        <img src={logo} alt="logo" />
      </div>
      <header>
        <h1>About us</h1>
        <h2>This is the internet and we're on it</h2>
        <p>
          Welcome to the Lunch Podcast where Casey and Casey's friend Alex talk
          about lunch, podcasts and world affairs.
          <br />
          Find us on:
        </p>

        <ul>
          <li>
            <a href="https://twitter.com/LunchPodcastLOL">
              Twitter:@LunchPodcastLol
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/show/14CEYSUFDH6gN3w909jblv">
              Spotify:@TheLunchPodacst
            </a>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <a href="https://twitter.com/caseyjwheldon">Twitter:@caseyjwheldon</a>
          <p>
            Online Casey is like in person Casey. His personality is the exact
            same. He actually is your friend and this is not a{" "}
            <a href="https://www.findapsychologist.org/parasocial-relationships-the-nature-of-celebrity-fascinations/#:~:text=Parasocial%20relationships%20are%20one%2Dsided,sports%20teams)%20or%20television%20stars.">
              parasocial relationship.
            </a>{" "}
            He loves it when fans constantly stop him on the street and ask him
            for pictures.
          </p>
          <img
            src={casey}
            alt="Casey was a model for a medical book. It's his impeccable nose."
          />
        </section>
        <section>
          <a href="https://twitter.com/socketquest">Twitter:@socketquest</a>
          <p>
            You can be best friends with Alex too, just like Casey. A outdoorsy
            type who makes all the visual arts. So good.
          </p>
          <img src={alex} alt="Alex when he's old and aged" />
        </section>
      </main>
    </section>
  );
}
