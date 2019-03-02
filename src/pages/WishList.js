import React, { Component } from "react";
import Devie_List_Item from "../components/Device_List_Item";
import { Table } from "reactstrap";
import { Button, ButtonGroup, Row, Col } from "reactstrap";

export default class Cart extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="h2">Wishlist</h1>
        <div className="mt-4">
          <Devie_List_Item
            toolbar={
              <a class="btn btn-success" href="" role="button">
                Add to Cart
              </a>
            }
          />
        </div>
      </div>
    );
  }
}
