import React, { Component } from "react";
import Devices_Card from "../components/Devices_Card";

export default class All_Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { _id: "", name: "Redmi Note Pro", short_desc: "Apple Test Lover" },
        { _id: "", name: "Redmi Note Pro", short_desc: "Apple Test Lover" },
        { _id: "", name: "Redmi Note Pro", short_desc: "Apple Test Lover" },
        { _id: "", name: "Redmi Note Pro", short_desc: "Apple Test Lover" }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="container mt-4">
          <h2>Devices</h2>
          <div className="row m-auto">
            {this.state.data.map(single_device => (
              <Devices_Card {...single_device} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
