import React, { Component } from "react";
import axios from "axios";
import "./FlightInfo.css";
class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "dallas",
      to: "houston",
      date: "01262019",
      info: []
    };
  }

  getFlightInfo = async () => {
    await axios
      .get(`/api/flight/${this.state.from}/${this.state.to}/${this.state.date}`)
      .then(res => this.setState({ info: res.data }));

    console.log(
      `/api/flight/${this.state.from}/${this.state.to}/${this.state.date}`
    );
  };

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
    console.log("this where to cut", this.state.info);

    let showInfo = this.state.info.map((e, i) => {
      return (
        <div className="grid-container" key={i}>
          <br />
          <div className="grid-item">Airline: {e.airline}</div>
          <div className="grid-item">From: {e.departure}</div>
          <div className="grid-item">To: {e.arrival}</div>
          <div className="grid-item">Price: {e.price}$</div>
          <div className="grid-item">Stops: {e.stops}</div>
          <div className="grid-item">Plane: {e.plane}</div>
          <br />
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

        {showInfo}
      </div>
    );
  }
}

export default FlightInfo;
