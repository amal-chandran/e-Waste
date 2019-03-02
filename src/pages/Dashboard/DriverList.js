import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const columns = [
  {
    dataField: "name",
    text: "Name"
  },
  {
    dataField: "modelNumber",
    text: "Model Number"
  },
  {
    dataField: "reuseMethod",
    text: "Product Name"
  },
  {
    dataField: "manufacturer_name",
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
          <Query
            query={gql`
              {
                myDevices {
                  name
                  reuseMethod
                  modelNumber
                  manufacturer {
                    name
                  }
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              data = data.myDevices.map(data => {
                return {
                  ...data,
                  manufacturer_name: data.manufacturer.name
                };
              });
              return (
                <BootstrapTable keyField="id" data={data} columns={columns} />
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default withRouter(DriverList);
