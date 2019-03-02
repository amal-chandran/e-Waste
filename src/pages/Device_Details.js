import React, { Component } from "react";
import thumb from "./../assets/placeholder.png";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const SLIGLE_DEVICE = gql`
  query getDevice($id: Int!) {
    device(id: $id) {
      name
      specification {
        hwSpecification
        swSpecification
        supportNotes
        version
      }
      manufacturer {
        name
        description
      }
      reuseMethod
      modelNumber
      added
      bannerDevice {
        id
        price
        quantity
      }
    }
  }
`;

export default class IndResult extends Component {
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
    const deviceId = this.props.match.params.deviceId
      ? this.props.match.params.deviceId
      : null;

    return (
      <div>
        <Query variables={{ id: deviceId }} query={SLIGLE_DEVICE}>
          {({ data, loading, error }) => {
            if (loading) return <div>Loading</div>;

            return (
              data &&
              data.device && (
                <div className="container my-2">
                  <div className="mt-4">
                    <div className="text-center">
                      <h2>Redmi Note Pro</h2>
                    </div>

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
                          Specifications
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
                          Market
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="bg-white px-3 py-2 border border-top-0"
                      activeTab={this.state.activeTab}
                    >
                      <TabPane tabId="1">
                        <Row>
                          <Col sm="12">
                            <div className="row">
                              <div className="col">
                                <img
                                  className="rounded m-2"
                                  src={thumb}
                                  alt=""
                                />
                                <img
                                  className="rounded m-2"
                                  src={thumb}
                                  alt=""
                                />
                                <img
                                  className="rounded m-2"
                                  src={thumb}
                                  alt=""
                                />
                              </div>
                              <div className="col-8 border-left">
                                <div className="row">
                                  <div className="col">
                                    <h6 className=" pb-2">Basic Details</h6>
                                    <table>
                                      <tr>
                                        <td className="text-secondary font-weight-light">
                                          Name
                                        </td>
                                        <td width="10px">:</td>
                                        <td
                                          className="font-weight-bold"
                                          align="left"
                                        >
                                          {data.device.name}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-secondary font-weight-light">
                                          Manufacture
                                        </td>
                                        <td width="10px">:</td>

                                        <td
                                          className="font-weight-bold"
                                          align="left"
                                        >
                                          {data.device.manufacturer.name}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-secondary font-weight-light">
                                          Version
                                        </td>
                                        <td width="10px">:</td>
                                        <td
                                          className="font-weight-bold"
                                          align="left"
                                        >
                                          {data.device.version}
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div className="col border-left">
                                    <h6 className=" pb-2">Links</h6>
                                    <Link to="">MI</Link>
                                    <br />
                                    <Link to="">Support Team</Link>
                                    <br />
                                    <Link to="">Phone</Link>
                                    <br />
                                    <Link to="">Email</Link>
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                  <div className="col">
                                    <h5 className="text-center">
                                      Software Specifications
                                    </h5>
                                    version
                                    {data.device.specification.swSpecification}
                                  </div>
                                  <div
                                    style={{ minHeight: "200px" }}
                                    className="col border-left"
                                  >
                                    <h5 className="text-center">
                                      Hardwire Specifications
                                    </h5>
                                    {data.device.specification.hwSpecification}
                                  </div>
                                </div>
                                <hr />
                                <div>
                                  <h4>Reuse Methods</h4>
                                  {data.device.specification.supportNotes}
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <div className="row">
                          <div className="col">
                            <div>
                              <img className="rounded m-2" src={thumb} alt="" />
                              <img className="rounded m-2" src={thumb} alt="" />
                            </div>
                            <div className="row m-2">
                              <button className="btn btn-warning col font-weight-bold ">
                                Add to Cart
                              </button>
                              <button className="btn btn-success ml-2 col font-weight-bold ">
                                Buy
                              </button>
                            </div>
                          </div>
                          <div className="col-8 border-left">
                            <div className="row">
                              <div className="col">
                                <h6>Basic Details</h6>
                                <table>
                                  <tr>
                                    <td className="text-secondary font-weight-light">
                                      Name
                                    </td>
                                    <td width="10px">:</td>
                                    <td
                                      className="font-weight-bold"
                                      align="left"
                                    >
                                      {data.device.name}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-secondary font-weight-light">
                                      Manufacture
                                    </td>
                                    <td width="10px">:</td>

                                    <td
                                      className="font-weight-bold"
                                      align="left"
                                    >
                                      {data.device.manufacturer.name}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-secondary font-weight-light">
                                      Condition
                                    </td>
                                    <td width="10px">:</td>
                                    <td
                                      className="font-weight-bold"
                                      align="left"
                                    >
                                      {data.device.version}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-secondary font-weight-light">
                                      Avaliabiliy
                                    </td>
                                    <td width="10px">:</td>

                                    <td
                                      className="font-weight-bold"
                                      align="left"
                                    >
                                      {data.device.bannerDevice.quantity}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-secondary font-weight-light">
                                      Short Description
                                    </td>
                                    <td width="10px">:</td>

                                    <td
                                      className="font-weight-bold"
                                      align="left"
                                    >
                                      {data.device.name}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                              <div className="col">
                                <h6>Seller &amp; Delivary</h6>
                                <div>Seller</div>
                              </div>
                            </div>

                            <hr />
                            <div>
                              <div className="h4">
                                {Math.min(
                                  ...data.device.bannerDevice.map(
                                    data => data.price
                                  )
                                )}
                              </div>
                              <div>Delivary: ₹6000</div>
                            </div>
                            <hr />
                            <div>
                              <h4>Reviews</h4>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              )
            );
          }}
        </Query>
      </div>
    );
  }
}
