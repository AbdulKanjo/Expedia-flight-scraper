import React, { Component } from "react";
import { connect } from "react-redux";
import "./InputInformation.css";
import {
  updateFrom,
  updateTo,
  updateDate
} from "../../ducks/reducers/mainReducer";

class InputInformation extends Component {
  render() {
    const { updateFrom, updateTo, updateDate } = this.props;
    return (
      <div className="input-flight-info">
        <div>
          <input
            className="input-field"
            placeholder="From"
            onChange={e => updateFrom(e.target.value)}
            value={this.props.from}
          />
        </div>
        <div>
          <input
            className="input-field"
            placeholder="To"
            onChange={e => updateTo(e.target.value)}
            value={this.props.to}
          />
        </div>
        <div>
          <input
            className="input-field"
            placeholder="Date"
            onChange={e => updateDate(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateFrom, updateTo, updateDate }
)(InputInformation);
