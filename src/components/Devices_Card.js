import React from "react";
import placeholder from "./../assets/placeholder.png";
import { withRouter } from "react-router-dom";

const Devices_Card = props => {
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
};

export default withRouter(Devices_Card);
