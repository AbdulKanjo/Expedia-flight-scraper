import React, { Component } from "react";
import axios from "axios";

class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "austin",
      to: "dallas",
      date: "01232019",
      info: []
    };
  }

  getFlightInfo() {
    axios
      .get(`/api/flight/${this.state.from}/${this.state.to}/${this.state.date}`)
      .then(res => {
        this.setState({ info: res.data });
        console.log(res.data);
      });
    console.log(
      `/api/flight/${this.state.from}/${this.state.to}/${this.state.date}`
    );
  }

  handleFrom = e => {
    this.setState({ from: e });
  };

  handleTo = e => {
    this.setState({ to: e });
  };

  handleDate = e => {
    this.setState({ date: e });
  };

  render() {
    console.log(this.state.info);

    return (
      <div>
        <input
          placeholder="From"
          onChange={e => this.handleFrom(e.target.value)}
        />
        <input placeholder="To" onChange={e => this.handleTo(e.target.value)} />
        <input
          placeholder="Date"
          onChange={e => this.handleDate(e.target.value)}
        />
        <button onClick={() => this.getFlightInfo()}>Check Flight</button>
        {this.state.info}
      </div>
    );
  }
}

export default FlightInfo;
