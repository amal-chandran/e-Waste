import React, { Component } from "react";
import SideBarDash from "./SideBar_Dash";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBarDash />
          <div className="col pt-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
