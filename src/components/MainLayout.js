import React, { Component } from "react";
import NavBar from "./NavBar";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
