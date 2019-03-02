import React, { Component } from "react";
import OrderDetail from "./../../components/OrderDetail";

export default class MyOrders extends Component {
  render() {
    return (
      <div className="container">
        <h4>My Orders</h4>
        <div className="mt-4 ">
          <OrderDetail />
          <OrderDetail />
        </div>
      </div>
    );
  }
}
