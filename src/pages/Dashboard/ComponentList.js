import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
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
          <Query
            query={gql`
              {
                myComponents {
                  name
                  added
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
              data = data.myDevices
                ? data.myDevices.map(data => {
                    return {
                      ...data,
                      manufacturer_name: data.manufacturer.name
                    };
                  })
                : [];
              return (
                <BootstrapTable keyField="id" data={data} columns={columns} />
              );
            }}
          </Query>{" "}
        </div>
      </div>
    );
  }
}
