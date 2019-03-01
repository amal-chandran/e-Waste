import React, { Component } from "react";
import SideBar_Dash from "./SideBar_Dash";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar_Dash />
          <div className="col pt-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
