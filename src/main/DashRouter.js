import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardLayout from "./../components/DashboardLayout";
import Add_Product from "./../pages/Dashboard/Add_Product";
import DriverList from "./../pages/Dashboard/DriverList";
import Cart from "./../pages/Cart";
import Wishlist from "./../pages/WishList";
import Profile from "./../pages/Dashboard/Profile";
import ComponentList from "./../pages/Dashboard/ComponentList";

export default class DashRouter extends Component {
  render() {
    return (
      <DashboardLayout>
        <Switch>
          <Route path="/dashboard/addproduct" component={Add_Product} />
          <Route path="/dashboard/componentlist" component={ComponentList} />
          <Route path="/dashboard/cart" component={Cart} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/wishlist" component={Wishlist} />
          <Route path="/dashboard/devicelist" component={DriverList} />

          {/* <Route path="/dashboard/wishlist" component={WishList} />
          <Route path="/dashboard/profile" component={ProfInfo} />
          <Route path="/dashboard/cart" component={Cart} />
          <Route path="/dashboard/myitems" component={MyItems} />
          <Route path="/dashboard/" component={Default} /> */}
        </Switch>
      </DashboardLayout>
    );
  }
}
