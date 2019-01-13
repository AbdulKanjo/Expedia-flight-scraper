import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFrom } from "../../ducks/reducers/mainReducer";
import "./FromDestinations.css";

class FromDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { updateFrom } = this.props;
    return (
      <div>
        FROM
        <div className="city-selector">
          <div className="actual-city" onClick={() => updateFrom("Dallas")}>
            Dallas
          </div>
          <div className="actual-city" onClick={() => updateFrom("Austin")}>
            Austin
          </div>
          <div className="actual-city" onClick={() => updateFrom("Houston")}>
            Houston
          </div>
          <div className="actual-city" onClick={() => updateFrom("Orlando")}>
            Orlando
          </div>
          <div className="actual-city" onClick={() => updateFrom("Atlanta")}>
            Atlanta
          </div>
          <div className="actual-city" onClick={() => updateFrom("Chicago")}>
            Chicago
          </div>
          <div className="actual-city" onClick={() => updateFrom("New York")}>
            New York
          </div>
          <div
            className="actual-city"
            onClick={() => updateFrom("San Francisco")}
          >
            San Francisco
          </div>
          <div className="actual-city" onClick={() => updateFrom("San Diego")}>
            San Diego
          </div>
          <div className="actual-city" onClick={() => updateFrom("Denver")}>
            Denver
          </div>
          <div className="actual-city" onClick={() => updateFrom("Boston")}>
            Boston
          </div>
          <div className="actual-city" onClick={() => updateFrom("Washington")}>
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
  { updateFrom }
)(FromDestinations);
