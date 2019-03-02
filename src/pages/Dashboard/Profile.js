import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// const UPDATE_USER = gql`mutation Update($name){
//     user(name:$name){
// data
//     }
// }`;

export default class ProfInfo extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="h2">Profile</h1>
        <hr />
        {/* <Mutation query={UPDATE_USER}>
          {({ data, loading, error }) => {
            return ( */}
        <div>
          <Formik>
            <Form>
              <div class="form-row form-group">
                <div class="col ">
                  <label htmlFor="">First Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Last Name</label>

                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="form-row form-group">
                <div class="col ">
                  <label htmlFor="">Email</label>

                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Mobile</label>

                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
              </div>
              <div class="form-row form-group">
                <div class="col ">
                  <label htmlFor="">Address</label>

                  <Field
                    component={"textarea"}
                    name="name"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Address</label>

                  <Field
                    component={"textarea"}
                    name="name"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
              </div>
              <button className="btn btn-md btn-primary">Save</button>
            </Form>
          </Formik>
        </div>
        {/* );
          }}
        </Mutation> */}
      </div>
    );
  }
}
