import React from "react";

export default class Rss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      xmlDoc: {}
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
    // console.log(data.querySelector("item"));
    let epList = data.querySelectorAll("item");
    console.log(this.state);

    epList.forEach(item => {

      let elList = [
        "title",
        "description",
        "link",
        "pubDate",
        "enclosure",
        "itunes:summary",
        "itunes:image"
      ];

      elList.forEach(el => {
        if(el === "enclosure") {
            this.setState({
                xmlDoc: {
                    enclosure: item.querySelector(el).getAttribute("url")
                }
            });
        } else if(el === "itunes:image") {
            this.setState({
                xmlDoc: {
                    image: item.querySelector(el).getAttribute("href")
                }
            });
        } else {
            this.setState({
                xmlDoc: {
                    el: item.querySelector(el)
                }
            });
        }
      })

      
      return true;
    });

    // Loop epList
    // get Title, description, link, pubDate
    // enclosure[url]
    // itunes:summary
    // itunes:image[href]
  }

  render() {
    const { xmlDoc, isLoaded, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <section className="Rss">{xmlDoc}</section>;
    }
  }
}
