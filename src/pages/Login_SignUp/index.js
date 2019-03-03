import React, { Component } from "react";
import "./style.css";
import { Formik, Form, Field } from "formik";
import { UncontrolledAlert } from "reactstrap";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { withRouter, Link } from "react-router-dom";
import { setAuth } from "./../../redux/actions/auth-actions";
import { connect } from "react-redux";

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const SIGNUP = gql`
  mutation Signup(
    $username: String!
    $password: String!
    $email: String!
    $firstname: String!
    $lastname: String!
  ) {
    createCustomuser(
      email: $email
      username: $username
      password: $password
      firstname: $firstname
      lastname: $lastname
    ) {
      customuser {
        username
        usertype
      }
    }
  }
`;

class LogIn_SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "login"
    };
  }

  SignUpForm = () => (
    <Mutation
      onCompleted={data => {
        this.setState({ form: "login" });
      }}
      mutation={SIGNUP}
    >
      {(SignUp, { data }) => (
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: ""
          }}
          onSubmit={values => {
            SignUp({ variables: values });
          }}
        >
          <Form className="form-signup">
            <h1 className="h3 text-center mb-3 font-weight-bold">
              Create Account
            </h1>

            <div className="form-row">
              <div className="form-group col">
                <Field
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col">
                <Field
                  type="text"
                  name="lastname"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="form-group">
              <Field
                type="text"
                name="username"
                className="form-control"
                placeholder="User name"
              />
            </div>

            <div className="form-group">
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            <div className="checkbox mb-3">
              <label>
                <Field type="checkbox" defaultValue="remember-me" /> Accepted
                terms and conditions
              </label>
            </div>

            <button className="btn btn-lg btn-info btn-block" type="submit">
              Sign Up
            </button>
            <hr />
            <div className=" text-light text-center  mt-3 mb-2  ">
              <Link
                to=""
                onClick={e => {
                  e.preventDefault();
                  this.setState({ form: "login" });
                }}
                className="text-info"
                href=""
              >
                Already Joined
              </Link>
            </div>
          </Form>
        </Formik>
      )}
    </Mutation>
  );

  LoginForm = () => (
    <Mutation
      onCompleted={data => {
        this.props.setAuth(data.tokenAuth.token);
        this.props.history.push("/SearchResult");
        localStorage.setItem("token", data.tokenAuth.token);
      }}
      mutation={LOGIN}
    >
      {(Login, { data, error }) => (
        <div>
          {error && (
            <UncontrolledAlert color="danger">
              <div className="text-center">
                <strong>Authentication Failed</strong>
              </div>
            </UncontrolledAlert>
          )}
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={values => {
              Login({ variables: values });
            }}
          >
            <Form className="form-signin">
              <h1 className="h3 text-center mb-3 font-weight-bold">Login</h1>

              <div className="form-group">
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="row justifiy-content-between">
                <div className="col">
                  <div className="checkbox mb-3">
                    <label>
                      <Field type="checkbox" defaultValue="remember-me" />{" "}
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col text-light text-right">
                  <Link to="">Forgot password ?</Link>
                </div>
              </div>

              <button className="btn btn-lg btn-info btn-block" type="submit">
                Sign in
              </button>
              <hr />
              <div className=" text-light text-center  mt-3 mb-2  ">
                <Link
                  to=""
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ form: "signup" });
                  }}
                  className="text-info"
                >
                  Create Account
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </Mutation>
  );

  render() {
    return (
      <div>
        <div>
          {this.state.form === "login" ? this.LoginForm() : this.SignUpForm()}
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { setAuth }
  )(LogIn_SignUp)
);
