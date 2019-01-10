import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTo } from "../../ducks/reducers/mainReducer";
import "./ToDestinations.css";
class ToDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  changeBorderColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    // console.log(this.props);

    const { updateTo } = this.props;
    return (
      <div>
        TO
        <div className="city-selector">
          <div className="actual-city" onClick={() => updateTo("Dallas")}>
            Dallas
          </div>
          <div className="actual-city" onClick={() => updateTo("Austin")}>
            Austin
          </div>
          <div className="actual-city" onClick={() => updateTo("Houston")}>
            Houston
          </div>
          <div className="actual-city" onClick={() => updateTo("Orlando")}>
            Orlando
          </div>
          <div className="actual-city" onClick={() => updateTo("Atlanta")}>
            Atlanta
          </div>
          <div className="actual-city" onClick={() => updateTo("Chicago")}>
            Chicago
          </div>
          <div className="actual-city" onClick={() => updateTo("New York")}>
            New York
          </div>
          <div
            className="actual-city"
            onClick={() => updateTo("San Francisco")}
          >
            San Francisco
          </div>
          <div className="actual-city" onClick={() => updateTo("San Diego")}>
            San Diego
          </div>
          <div className="actual-city" onClick={() => updateTo("Denver")}>
            Denver
          </div>
          <div className="actual-city" onClick={() => updateTo("Boston")}>
            Boston
          </div>
          <div className="actual-city" onClick={() => updateTo("Washington")}>
            Washington
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { updateTo }
)(ToDestinations);
