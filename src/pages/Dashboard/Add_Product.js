import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

export default class Add_Product extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto w-50">
          <h4>Add Device</h4>
          <Formik>
            <Form>
              <div className="form-group">
                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Model"
                />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Model Number"
                />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <button className="btn btn-primary">Save</button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
