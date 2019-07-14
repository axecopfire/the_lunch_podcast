import React from "react";
import RssEp from "./RssEp";

export default class Rss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      xmlDoc: []
    };
  }

  componentDidMount() {
    fetch("https://anchor.fm/s/af3e800/podcast/rss")
      .then(res => res.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => this.responseSanitizer(data))
      .catch(error =>
        this.setState({
          error
        })
      );
  }

  responseSanitizer(data) {
    let epList = data.querySelectorAll("item");

    let elList = [
      "title",
      "description",
      "link",
      "pubDate",
      "enclosure",
      "summary",
      "image"
    ];

    // Loop through List of Episodes
    // Also loop through list of elements from fetched xml
    // then set state of xmlDoc
    epList.forEach(item => {
      let itemObj = {};
      // console.log(item);

      elList.forEach(el => {
        if (el === "enclosure") {
          itemObj["enclosure"] = item.querySelector(el).getAttribute("url");
        } else if (el === "image") {
          itemObj["image"] = item.querySelector(el).getAttribute("href");
        } else {
          itemObj[el] = item.querySelector(el).textContent;
        }
      });

      this.setState({
        xmlDoc: [...this.state.xmlDoc, itemObj],
        isLoaded: true
      });
      return true;
    });
  }

  render() {
    const { xmlDoc, error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="epList">
          {xmlDoc.map((item, index) => (
            <RssEp ep={item} key={index} />
          ))}
        </section>
      );
    }
  }
}
