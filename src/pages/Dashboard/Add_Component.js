import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Label, Container } from "reactstrap";
import Button from "reactstrap/lib/Button";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_COMPONENT = gql`
  mutation createComponent(
    $hwSpecification: String!
    $name: String!
    $manufacturerName: String!
    $supportNotes: String!
    $swSpecification: String!
    $version: String!
  ) {
    createComponent(
      hwSpecification: $hwSpecification
      name: $name
      manufacturerName: $manufacturerName
      supportNotes: $supportNotes
      swSpecification: $swSpecification
      version: $version
    ) {
      id
    }
  }
`;

export default class Add_Component extends Component {
  render() {
    return (
      <Mutation
        onCompleted={() => {
          this.setState({});
        }}
        mutation={ADD_COMPONENT}
      >
        {(createComponent, { data }) => (
          <Container className="pt-5 pb-5">
            <h1>
              <b>Add Component</b>
            </h1>
            <hr />
            <Formik
              initialValues={{
                hwSpecification: "",
                name: "",
                manufacturerName: "",
                supportNotes: "",
                swSpecification: "",
                version: ""
              }}
              onSubmit={values => {
                createComponent({ variables: values });
              }}
            >
              <Form>
                <h5>Basic Details</h5>
                <Row className="form-group">
                  <Col>
                    <Label>Product Name</Label>
                    <Field type="name" name="name" className="form-control" />
                  </Col>
                  <Col>
                    <Label>Version</Label>
                    <Field
                      type="text"
                      name="version"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <Label>Manufacture Name</Label>
                    <Field
                      type="text"
                      name="manufacturerName"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <hr />
                <h5>Notes</h5>
                <Row>
                  <Col>
                    <Label>Notes on The Component</Label>

                    <Field
                      component={"textarea"}
                      name="supportNotes"
                      className="form-control"
                      placeholder=""
                    />
                  </Col>
                </Row>
                <hr />
                <h5>Specification</h5>
                <Row>
                  <Col>
                    <Label>Software Specifications</Label>
                    <Field
                      component={"textarea"}
                      name="swSpecification"
                      className="form-control"
                      placeholder=""
                    />
                  </Col>
                  <Col>
                    <Label>Hardware Specifications</Label>
                    <Field
                      component={"textarea"}
                      name="hwSpecification"
                      className="form-control"
                      placeholder=""
                    />
                  </Col>
                </Row>
                <Row className="pt-5 pb-5">
                  <Col>
                    <Button color="primary" outline type="submit">
                      Save Product
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Formik>
          </Container>
        )}
      </Mutation>
    );
  }
}
