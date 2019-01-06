import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./FlightInfo.css";
import FromDestinations from "../FromDestinations/FromDestinations";
import ToDestinations from "../ToDestinations/ToDestinations";
import InputInformation from "../InputInformation/InputInformation";
import LoadingPlane from "../LoadingPlane/LoadingPlane";

class FlightInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      loading: false,
      searchOptions: true
    };
  }

  getFlightInfo = async () => {
    this.setState({ loading: true });
    this.setState({ searchOptions: false });
    await axios
      .get(`/api/flight/${this.props.from}/${this.props.to}/${this.props.date}`)
      .then(res => this.setState({ info: res.data, loading: false }));
    console.log(
      `/api/flight/${this.props.from}/${this.props.to}/${this.props.date}`
    );
  };

  handleDestinations = () => {
    this.setState({ searchOptions: true });
  };

  render() {
    let sortedData = this.state.info.sort((a, b) => a.price - b.price);

    let showInfo = sortedData.map((e, i) => {
      return (
        <div className="grid-container" key={i}>
          <br />
          <div className="grid-item">Airline: {e.airline}</div>
          <div className="grid-item">From: {e.departure.replace(",", "")}</div>
          <div className="grid-item">To: {e.arrival.replace(",", "")}</div>
          <div className="grid-item">Price: {e.price}$</div>
          <div className="grid-item">Stops: {e.stops}</div>
          <div className="grid-item">Plane: {e.plane}</div>
          <br />
        </div>
      );
    });

    return (
      <div>
        {this.props.from ? (
          this.props.to === this.props.from ? (
            <p>Must have different destinations</p>
          ) : (
            ""
          )
        ) : (
          <p>Select destinations or choose</p>
        )}
        <InputInformation checkInfo={this.getFlightInfo} />
        <button onClick={() => this.getFlightInfo()}>Check Flight</button>
        {this.state.searchOptions ? (
          <div>
            <FromDestinations />
            <ToDestinations />
            <button onClick={() => this.getFlightInfo()}>Check Flight</button>
          </div>
        ) : this.state.loading ? (
          <LoadingPlane />
        ) : (
          <div>
            <button onClick={() => this.handleDestinations()}>
              Change Destinations
            </button>
            {showInfo}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps)(FlightInfo);
