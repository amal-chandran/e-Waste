import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row } from "reactstrap";
import Col from "reactstrap/lib/Col";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import Button from "reactstrap/lib/Button";

export default class Filter extends Component {
  render() {
    return (
      <nav
        className="col-md-2 d-none d-md-block bg-light sidebar"
        style={{ minHeight: "100vh" }}
      >
        <div className="sidebar-sticky ">
          <div className="nav flex-column">
            <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <b>Filters</b>
            </h4>
          </div>
          <ul className="nav flex-column">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>CATEGORIES</span>
            </h6>
            <li className="nav-item">
              <NavLink activeClassName="active" to="" className="nav-link ">
                <span data-feather="home" />
                <i class="fas fa-angle-left" /> Motherboard
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
          <ul className="nav flex-column">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>PRICE</span>
            </h6>
            <Row>
              <Col>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>From</option>
                  <option value="1">₹0</option>
                  <option value="2">₹100</option>
                  <option value="3">₹500</option>
                </select>
              </Col>

              <Col>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>To</option>
                  <option value="1">₹100</option>
                  <option value="2">₹500</option>
                  <option value="3">₹1000</option>
                </select>
              </Col>
            </Row>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>BRAND</span>
            <div className="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle" />
            </div>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Row>
                <Col>
                  <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="append">
                      <Button color="secondary">
                        <i class="fas fa-search" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>CATEGORY</span>
            <div className="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle" />
            </div>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Row>
                <Col>
                  <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="append">
                      <Button color="secondary">
                        <i class="fas fa-search" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
