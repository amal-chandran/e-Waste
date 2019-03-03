import React, { Component } from "react";
import { Row } from "reactstrap";
import Button from "reactstrap/lib/Button";
import placeholder from "./../assets/placeholder.png";
import Col from "reactstrap/lib/Col";
import { Link } from "react-router-dom";

export default class OrderDetail extends Component {
  render() {
    return (
      <div className="bg-white p-4 my-2 rounded">
        <Button color="primary">ORDERID</Button>{" "}
        <Link
          className="btn btn-outline-primary"
          activeClassName="active"
          to="/dashboard/track"
        >
          Track
        </Link>
        <hr />
        <Row>
          <Col md={3} className="border-right">
            <img
              src={placeholder}
              class=""
              alt=""
            />
          </Col>
          <Col md={3} className="border-right">
            <h3>Product Name</h3>
            <h4>Seller Derails</h4>
          </Col>
          <Col className="border-right">
            <h4>Price: $1200</h4>
          </Col>
          <Col className="border-right">
            <p>Delivery Expected By "Date Here"</p>
          </Col>
          <Col>
            <Button color="danger" outline>
              Cancel Item
            </Button>
          </Col>
        </Row>
        <hr />
        <p>Ordered On: "date here"</p>
        <h3>Order Total="total Price here"</h3>
        <hr />
      </div>
    );
  }
}
