import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import { isEmpty } from "lodash";

const UPDATE_USER = gql`
  mutation profileUpdate(
    $username: String!
    $email: String!
    $lastName: String!
    $firstName: String!
  ) {
    profileUpdate(
      username: $username
      email: $email
      lastName: $lastName
      firstName: $firstName
    ) {
      customuser {
        id
      }
    }
  }
`;

export default class ProfInfo extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            me {
              username
              firstName
              lastName
              email
            }
          }
        `}
      >
        {({ data, loading, error }) => {
          console.log(data);
          if (loading || isEmpty(data.me)) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          if (isEmpty(data.me)) {
            data.me = {};
          }
          return (
            <Mutation
              onCompleted={() => {
                this.setState({});
              }}
              mutation={UPDATE_USER}
            >
              {(profileUpdate, { dataMa }) => (
                <div className="container mt-4">
                  <h1 className="h2">Profile</h1>
                  <hr />
                  <div>
                    <Formik
                      initialValues={{
                        firstname: "",
                        lastname: "",
                        email: "",
                        username: "",
                        ...data.me
                      }}
                      onSubmit={values => {
                        profileUpdate({ variables: values });
                      }}
                    >
                      <Form>
                        <div class="form-row form-group">
                          <div class="col ">
                            <label htmlFor="">First Name</label>
                            <Field
                              type="text"
                              name="firstName"
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="">Last Name</label>

                            <Field
                              type="text"
                              name="lastName"
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
                              name="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="">UserName</label>

                            <Field
                              type="text"
                              name="username"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-md btn-primary"
                          type="submit"
                        >
                          Save
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}
