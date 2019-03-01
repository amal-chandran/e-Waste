import React, { Component } from "react";
import thumb from "./../assets/placeholder.png";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

export default class IndResult extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "2"
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
      <div>
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
                        <img className="rounded m-2" src={thumb} alt="" />
                        <img className="rounded m-2" src={thumb} alt="" />
                        <img className="rounded m-2" src={thumb} alt="" />
                      </div>
                      <div className="col-8 border-left">
                        <div className="row">
                          <div className="col">
                            <h6 className=" pb-2">Basic Details</h6>
                            <div>
                              <div>Name</div>
                              <div>Manufacture</div>
                              <div>Version</div>
                              <div>SL No/Device Code</div>
                            </div>
                          </div>
                          <div className="col border-left">
                            <h6 className=" pb-2">Links</h6>
                            <a href="">MI</a>
                            <br />
                            <a href="">Support Team</a>
                            <br />
                            <a href="">Phone</a>
                            <br />
                            <a href="">Email</a>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col">
                            <h5 className="text-center">
                              Software Specifications
                            </h5>
                          </div>
                          <div
                            style={{ minHeight: "200px" }}
                            className="col border-left"
                          >
                            <h5 className="text-center">
                              Hardwire Specifications
                            </h5>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <h4>Reuse Methods</h4>
                          <div>Methods</div>
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
                        <div>Name</div>
                        <div>Short Description</div>
                        <div>Condition</div>
                        <div>Avaliabiliy</div>
                      </div>
                      <div className="col">
                        <h6>Seller &amp; Delivary</h6>
                        <div>Seller</div>
                      </div>
                    </div>

                    <hr />
                    <div>
                      <div className="h4">₹6000</div>
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
      </div>
    );
  }
}
