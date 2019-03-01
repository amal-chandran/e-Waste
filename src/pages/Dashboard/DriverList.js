import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 200
  }
];
const columns = [
  {
    dataField: "id",
    text: "Product ID"
  },
  {
    dataField: "name",
    text: "Product Name"
  },
  {
    dataField: "price",
    text: "Product Price"
  }
];

class DriverList extends Component {
  render() {
    return (
      <div>
        <div className="d-flex w-100 justify-content-between mb-2">
          <div>
            <h4>Device Manage</h4>
          </div>

          <div className="ml-auto align-self-end">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => {
                  this.props.history.push("/dashboard/addproduct");
                }}
                className="btn btn-success"
              >
                New
              </button>
              <button className="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <BootstrapTable keyField="id" data={products} columns={columns} />
        </div>
      </div>
    );
  }
}

export default withRouter(DriverList);
