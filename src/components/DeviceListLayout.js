import React, { Component } from "react";
import Filter from "./Side_Filter";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Filter /> <div className="col pt-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
