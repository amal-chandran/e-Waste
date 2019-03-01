import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";

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

export default class ComponentList extends Component {
  render() {
    return (
      <div>
        <div className="d-flex w-100 justify-content-between mb-2">
          <div>
            <h4>Component Manage</h4>
          </div>

          <div className="ml-auto align-self-end">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button className="btn btn-success">New</button>
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
