import React, { Component } from "react";
import DevicesCard from "../components/Devices_Card";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classnames from "classnames";

import {
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  NavItem,
  Nav
} from "reactstrap";
import AllResultsLayout from "../components/DeviceListLayout";
import TabPane from "reactstrap/lib/TabPane";
import TabContent from "reactstrap/lib/TabContent";
import NavLink from "reactstrap/lib/NavLink";
import { GET_ALL_COMPONENTS, GET_ALL_DEVICES } from "./SearchReults";

export default class All_Devices extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <AllResultsLayout>
        <div className="container mt-4">
          {/* Navigation Tabs */}
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Devices
              </NavLink>
            </NavItem>
          </Nav>
          {/* Tabular Data */}
          <TabContent activeTab={this.state.activeTab}>
            {/* Components Tab */}
            <TabPane tabId="1">
              <Row>
                <Col>
                  <Query query={GET_ALL_COMPONENTS}>
                    {({ loading, error, data }) => {
                      if (loading) return <p>Loading...</p>;
                      if (error) return <p>Error :(</p>;
                      return (
                        <div className="row m-auto">
                          {data.allComponent.map(single_device => (
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
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
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
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </AllResultsLayout>
    );
  }
}
