import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FlightInfo from "./Components/FlightInfo/FlightInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightInfo />
      </div>
    );
  }
}

export default App;
