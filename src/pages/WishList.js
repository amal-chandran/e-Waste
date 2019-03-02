import React, { Component } from "react";
import DevieListItem from "../components/Device_List_Item";
import Link from "react-router-dom/Link";


export default class Cart extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="h2">Wishlist</h1>
        <div className="mt-4">
          <DevieListItem
            toolbar={
              <Link class="btn btn-success" to="" role="button">
                Add to Cart
              </Link>
            }
          />
        </div>
      </div>
    );
  }
}
