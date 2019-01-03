import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateFrom,
  updateTo,
  updateDate
} from "../../ducks/reducers/mainReducer";

class InputInformation extends Component {
  render() {
    const { updateFrom, updateTo, updateDate } = this.props;
    return (
      <div>
        <input
          placeholder="From"
          onChange={e => updateFrom(e.target.value)}
          value={this.props.from}
        />
        <input
          placeholder="To"
          onChange={e => updateTo(e.target.value)}
          value={this.props.to}
        />
        <input placeholder="Date" onChange={e => updateDate(e.target.value)} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateFrom, updateTo, updateDate }
)(InputInformation);
