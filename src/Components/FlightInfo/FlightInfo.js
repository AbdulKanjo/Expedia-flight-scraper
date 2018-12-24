import React, { Component } from "react";

class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { test: "hello" };
  }

  render() {
    return <div>{this.state.test}</div>;
  }
}

export default FlightInfo;
