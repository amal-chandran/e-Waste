import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <nav
        className="col-md-2 d-none d-md-block bg-light sidebar"
        style={{ minHeight: "100vh" }}
      >
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Account Settings</span>
            </h6>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/dashboard/profile"
                className="nav-link "
              >
                <span data-feather="home" />
                Profile Information <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/dashboard/cart"
                className="nav-link "
              >
                <span data-feather="home" />
                Cart <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/dashboard/wishlist"
                className="nav-link "
              >
                <span data-feather="home" />
                Wislist <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Product Options</span>
            <div className="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle" />
            </div>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/dashboard/addproduct"
                className="nav-link "
              >
                <span data-feather="file-text" />
                Upload a New Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/dashboard/myitems"
                className="nav-link "
              >
                <span data-feather="file-text" />
                Your Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/dashboard/devicelist"
                className="nav-link "
              >
                <span data-feather="file-text" />
                Device Manage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/dashboard/componentlist"
                className="nav-link "
              >
                <span data-feather="file-text" />
                Component Manage
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
