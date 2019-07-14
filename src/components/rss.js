import React from "react";

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
          isLoaded: true,
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

      elList.forEach(el => {
        if (el === "enclosure") {
          itemObj.enclosure = item.querySelector(el).getAttribute("url");
        } else if (el === "image") {
          itemObj.image = item.querySelector(el).getAttribute("href");
        } else {
          itemObj[el] = item.querySelector(el).textContent;
        }
      });
      
      let joined = this.state.xmlDoc.concat(itemObj);
      this.setState({ xmlDoc: joined })
      return true;
    });
  }

  render() {
    const { xmlDoc, error } = this.state;

    console.log(xmlDoc);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <section className="Rss">{/* <p>{xmlDoc[0].title}</p> */}</section>
      );
    }
  }
}
