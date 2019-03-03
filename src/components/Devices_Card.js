import React from "react";
import placeholder from "./../assets/placeholder.png";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const Devices_Card = props => {
  return (
    <Mutation
      mutation={gql`
        mutation addDeviceCart($id: Int!) {
          addDeviceCartQuantity(id: $id, quantity: 1) {
            buyer {
              id
            }
          }
        }
      `}
    >
      {(addDeviceCart, { loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          <div className="pl-2 pr-2 pt-2 pb-2">
            <div className="card" style={{ width: "18rem" }}>
              <img src={placeholder} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5>{props.name}</h5>
                <p className="card-text">{props.short_desc}</p>
                <div class="row m-auto w-100">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      // addDeviceCart(this.props.id)
                      // props.history.push("/cart");
                    }}
                    type="button"
                    class="btn col font-weight-bold btn-warning"
                  >
                    Buy
                  </button>
                  <button
                    onClick={e => {
                      e.preventDefault();

                      addDeviceCart({ variables: { id: props.id } });
                      props.history.push("/dashboard/cart");
                    }}
                    type="button"
                    class="btn col font-weight-bold ml-1 btn-info"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Mutation>
  );
};

export default withRouter(Devices_Card);
