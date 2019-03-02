import React, { Component } from "react";
import DevicesCard from "../components/Devices_Card";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";
import AllResultsLayout from "../components/DeviceListLayout";

const GET_ALL_DEVICES = gql`
  query {
    allDevice {
      id
      name
    }
  }
`;

export default class All_Devices extends Component {

  render() {
    return (
      <AllResultsLayout>
        <div className="container mt-4">
          <Row className="py-2 ">
            <Col>
              <InputGroup size="lg">
                <Input placeholder="Search" />
                <InputGroupAddon addonType="append">
                  <Button color="primary">
                    <i class="fas fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
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
                      <DevicesCard {...single_device} />
                    </Link>
                  ))}
                </div>
              );
            }}
          </Query>
        </div>
      </AllResultsLayout>
    );
  }
}
