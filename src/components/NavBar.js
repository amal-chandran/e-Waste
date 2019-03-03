import React, { Component } from "react";
import logo from "./../assets/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";
import { push } from "connected-react-router";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import gql from "graphql-tag";
import { Query } from "react-apollo";

library.add(faUser);
library.add(faSignOutAlt);

const GET_USER = gql`
  {
    me {
      name
    }
  }
`;

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navfont">
        <Query query={GET_USER}>
          {({ data, loading, error }) => {
            console.log(data);
            return (
              <Navbar color="dark" dark expand="md">
                <RouterNavLink to="/" className="navbar-brand">
                  <img
                    src={logo}
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-top mr-2"
                  />
                  e-Waste <b>Manager</b>
                </RouterNavLink>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <li class="nav-item ">
                      <RouterNavLink
                        activeClassName="text-light"
                        className="nav-link"
                        to="/SearchResult"
                      >
                        Search Waste
                      </RouterNavLink>
                    </li>

                    <li class="nav-item ">
                      <RouterNavLink
                        activeClassName="text-light"
                        className="nav-link"
                        to="/dashboard"
                      >
                        Dashboard
                      </RouterNavLink>
                    </li>
                    <NavItem>
                      <NavLink href="https://github.com/adevofficial/e-Waste">
                        GitHub
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        <FontAwesomeIcon icon="user" className="" />{" "}
                        {data ? (data.me ? data.me.name : "Guest") : "Guest"}
                      </DropdownToggle>
                      <DropdownMenu right className="dropdown-usermenu">
                        <a
                          role="menuitem"
                          class="dropdown-item"
                          href="/dashboard/cart"
                          data-ga-click="Header, go to profile, text:your profile"
                        >
                          Cart
                        </a>{" "}
                        <a
                          role="menuitem"
                          class="dropdown-item"
                          href="/dashboard/wishlist"
                          data-ga-click="Header, go to profile, text:your profile"
                        >
                          Wishlist
                        </a>{" "}
                        <a
                          role="menuitem"
                          class="dropdown-item"
                          href="/dashboard/"
                          data-ga-click="Header, go to profile, text:your profile"
                        >
                          Dashboard
                        </a>{" "}
                        <DropdownItem divider />
                        <DropdownItem
                          onClick={() => {
                            this.props.push("/");
                            localStorage.removeItem("token");
                          }}
                        >
                          <FontAwesomeIcon icon="sign-out-alt" />
                          LogOut
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default connect(
  null,
  { push }
)(NavBar);
