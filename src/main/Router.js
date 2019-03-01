import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LogIn_SignUp from "./../pages/Login_SignUp";
import DashRouter from "./DashRouter";
import All_Devices from "./../pages/All_Devices";
import Device_Details from "./../pages/Device_Details";
import AuthProtect from "./../components/AuthProtect";

export default class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/all_devices" component={All_Devices} />
          <Route path="/device_details" component={Device_Details} />
          <AuthProtect path="/dashboard" component={DashRouter} />
          <Route exact path="/" component={LogIn_SignUp} />
        </Switch>
      </div>
    );
  }
}
