import React, { Component } from "react";
import DeviceListItem from "../components/Device_List_Item";
import { Button} from "reactstrap";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class Cart extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="h2">Cart</h1>
        <Query
          query={gql`
            {
              me {
                buyerCart {
                  id
                }
              }
            }
          `}
        >
          {({ data, loading, error }) => {
            return (
              <div>
                <div className="mt-4">
                  {data &&
                    data.me &&
                    data.me.buyerCart &&
                    data.me.buyerCart.map(singleCart => (
                      <DeviceListItem
                        {...singleCart}
                        toolbar={
                          <Link class="btn btn-danger" to="" role="button">
                            Remove
                          </Link>
                        }
                      />
                    ))}
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
          }}
        </Query>
      </div>
    );
  }
}
