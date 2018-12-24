import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FlightInfo from "./components/FlightInfo/FlightInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <input placeholder="From" />
        <input placeholder="To" />
        <input placeholder="Date" />
        <FlightInfo />
      </div>
    );
  }
}

export default App;
