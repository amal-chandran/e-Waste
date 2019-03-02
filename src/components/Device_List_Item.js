import React, { Component } from "react";
import { Table, Row, Col } from "reactstrap";
import thumb from "./../assets/placeholder.png";

export default class IndividualItem extends Component {
  render() {
    return (
      <Row className="bg-white m-auto rounded">
        <Col
          sm={4}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={thumb} alt="..." />
        </Col>
        <Col>
          <Table>
            <tr>
              <th>Product Name</th>
              <td>Name Here</td>
            </tr>
            <tr>
              <th>Quandity</th>
              <td>Quandity Here</td>
            </tr>
            <tr>
              <th>Model Number</th>
              <td>Model Number here</td>
            </tr>
            <tr>
              <th>Product Description</th>
              <td>Product Description ges here</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>₹5000</td>
            </tr>
            <tr>
              <td align="right" colSpan="2">
                {this.props.toolbar}
              </td>
            </tr>
          </Table>
        </Col>
      </Row>
    );
  }
}
