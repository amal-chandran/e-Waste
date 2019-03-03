import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const columns = [
  {
    dataField: "name",
    text: "Name"
  },
  {
    dataField: "phoneNumber",
    text: "Phone Number"
  },
  {
    dataField: "pincode",
    text: "Pincode"
  },
  {
    dataField: "locality",
    text: "Locality"
  },
  {
    dataField: "address",
    text: "Address"
  },
  {
    dataField: "state",
    text: "State"
  },
  {
    dataField: "landmark",
    text: "Landmark"
  }
];

export default class ManageAddress extends Component {
  render() {
    return (
      <div>
        <div className="d-flex w-100 justify-content-between mb-2">
          <div>
            <h4>Address List</h4>
          </div>

          <div className="ml-auto align-self-end">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => {
                  this.props.history.push("/dashboard/addaddress");
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
                me {
                  addressOne {
                    name
                    phoneNumber
                    pincode
                    locality
                    address
                    state
                    landmark
                  }
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              data = data.me.addressOne ? [data.me.addressOne] : [];
              console.log(data);
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
