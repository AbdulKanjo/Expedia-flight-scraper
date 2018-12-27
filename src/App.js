import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FlightInfo from "./Components/FlightInfo/FlightInfo";
import store from "./ducks/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FlightInfo />
        </div>
      </Provider>
    );
  }
}

export default App;
