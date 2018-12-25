import React, { Component } from "react";
import axios from "axios";

class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "austin",
      to: "houston",
      date: "01232019",
      // info: { flight: [] }
      info: []
    };
  }

  getFlightInfo() {
    axios
      .get(`/api/flight/${this.state.from}/${this.state.to}/${this.state.date}`)
      .then(res => {
        let format = res.data.replace(/u'(?=[^:]+')/g, "'");
        this.setState({ info: format.replace(/'/g, '"') });
        // this.setState({ ...this.state.info, flight: res.data });
        console.log(res.data.info);
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
    // let test = this.state.info.replace(/'/g, '"');
    // console.log(test);
    console.log(this.state.info);
    let showInfo = this.state.info.map((e, i) => {
      return (
        <div key={i}>
          <div>{e.airline}</div>
          <div>{e.price}</div>
          <div>{e.departure}</div>
          <div>{e.arrival}</div>
          <div>{e.stops}</div>
          <div>{e.plane}</div>
        </div>
      );
    });

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
        {showInfo}
      </div>
    );
  }
}

export default FlightInfo;
