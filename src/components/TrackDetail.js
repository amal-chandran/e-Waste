import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import Row from "reactstrap/lib/Row";
import Placeholder from "./../assets/placeholder.png";
// import { Progress } from "reactstrap";
import Table from "reactstrap/lib/Table";

export default class TrackDetail extends Component {
  render() {
    return (
      <div className="pt-5">
        <Container>
          <Row>
            <Col md={3}>
              <img
                src={Placeholder}
                class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                alt=""
              />
            </Col>
            <Col md={3}>
              <h3>Product Name</h3>
              <h4>Breif detail</h4>
            </Col>
            <Col>
              {/* <Row>
                <div>
                  <Progress animated value={2 * 5} />
                  <Progress animated color="success" value="25" />
                  <Progress animated color="info" value={50} />
                  <Progress animated color="warning" value={75} />
                  <Progress animated color="danger" value="100" />
                  <Progress multi>
                    <Progress animated bar value="10" />
                    <Progress animated bar color="success" value="30" />
                    <Progress animated bar color="warning" value="20" />
                    <Progress animated bar color="danger" value="20" />
                  </Progress>
                </div>
              </Row> */}
              <Row>
                <p>Shipment Status (Delived,Yet To Be delivered)</p>
                <Table responsive>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Place</th>
                    <th>Dispatch Status</th>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>Time</td>
                    <td>Place</td>
                    <td>Dispatch Status</td>
                  </tr>
                </Table>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
