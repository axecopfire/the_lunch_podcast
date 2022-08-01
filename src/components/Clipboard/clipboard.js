import React from "react";

export default class Clipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    navigator.clipboard.writeText(this.state.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Copy Text" />
      </form>
    );
  }
}
