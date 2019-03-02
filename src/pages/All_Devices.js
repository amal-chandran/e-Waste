import React, { Component } from "react";
import Devices_Card from "../components/Devices_Card";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const GET_ALL_DEVICES = gql`
  query {
    allDevice {
      id
      name
    }
  }
`;

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
          <Query query={GET_ALL_DEVICES}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              return (
                <div className="row m-auto">
                  {data.allDevice.map(single_device => (
                    <Link
                      className="link_effect"
                      to={`/device_details/${single_device.id}`}
                    >
                      <Devices_Card {...single_device} />
                    </Link>
                  ))}
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}
