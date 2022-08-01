import React from "react";

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/Episodes">Listen</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/clipboard">Clipboard App</a>
          </li>
        </ul>
      </nav>
    );
  }
}
