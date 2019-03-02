import React, { Component } from "react";
import Devie_List_Item from "../components/Device_List_Item";
import { Table } from "reactstrap";
import { Button, ButtonGroup, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="h2">Cart</h1>
        <div className="mt-4">
          <Devie_List_Item
            toolbar={
              <a class="btn btn-danger" href="#" role="button">
                Remove
              </a>
            }
          />
        </div>
        <div className="mt-4 px-4 py-3 bg-secondary rounded">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="h5 font-weight-light">Total</span> :{" "}
                <span className="h5 ml-1">$432</span>
              </div>
              <div>
                <Link to="/all_devices" className="btn btn-info">
                  Back to List
                </Link>

                <Button className="ml-2" color="success">
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
