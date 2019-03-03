import React, { Component } from "react";
import DevicesCard from "../components/Devices_Card";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
  NavItem,
  Nav
} from "reactstrap";
import AllResultsLayout from "../components/DeviceListLayout";
import TabPane from "reactstrap/lib/TabPane";
import TabContent from "reactstrap/lib/TabContent";
import NavLink from "reactstrap/lib/NavLink";
import { Formik, Form, Field } from "formik";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const GET = gql`
  mutation deviceSearch($query: String!) {
    deviceSearch(query: $query) {
      devices {
        name
        id
      }
    }
  }
`;

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      deviceData: ""
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
          <Mutation
            onCompleted={data => {
              console.log(data);
              this.setState({ deviceData: data });
            }}
            mutation={GET}
          >
            {(deviceSearch, { data }) => (
              <Formik
                initialValues={{
                  query: ""
                }}
                onSubmit={values => {
                  console.log(values);
                  deviceSearch({ variables: values });
                }}
              >
                {() => {
                  return (
                    <Form>
                      <Row className="py-2 ">
                        <Col>
                          <InputGroup size="lg">
                            <Field
                              name="query"
                              className="form-control"
                              placeholder="Search"
                            />
                            <InputGroupAddon addonType="append">
                              <Button color="primary" type="submit">
                                <i class="fas fa-search" />
                              </Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Form>
                  );
                }}
              </Formik>
            )}
          </Mutation>

          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === "2"
                })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Devices
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent
            className="bg-white"
            style={{ minHeight: "400px" }}
            activeTab={this.state.activeTab}
          >
            <TabPane tabId="1">
              <Row>
                <Col>
                  <div className="row m-auto">
                    {this.state.deviceData &&
                      this.state.deviceData.deviceSearch &&
                      this.state.deviceData.deviceSearch.devices.map(
                        single_device => (
                          <Link
                            className="link_effect"
                            to={`/device_details/${single_device.id}`}
                          >
                            <DevicesCard {...single_device} />
                          </Link>
                        )
                      )}
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col>
                  {/* <Query query={GET}>
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
                    </Query> */}
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </AllResultsLayout>
    );
  }
}
