import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Label, Container } from "reactstrap";
import Button from "reactstrap/lib/Button";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_PRODUCT = gql`
  mutation createDevice(
    $name: String!
    $hwSpecification: String!
    $swSpecification: String!
    $modelNumber: String!
    $reuseMethod: String!
    $supportNotes: String!
    $version: String!
    $manufacturerName: String!
  ) {
    createDevice(
      name: $name
      hwSpecification: $hwSpecification
      swSpecification: $swSpecification
      modelNumber: $modelNumber
      reuseMethod: $reuseMethod
      supportNotes: $supportNotes
      version: $version
      manufacturerName: $manufacturerName
    ) {
      id
    }
  }
`;

export default class Add_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sw_spec: "",
      hw_spec: ""
    };
  }
  render() {
    return (
      <Mutation
        onCompleted={() => {
          this.setState({});
        }}
        mutation={ADD_PRODUCT}
      >
        {(createDevice, { data }) => (
          <Container className="pt-5 pb-5">
            <h1>
              <b>Add Product</b>
            </h1>
            <hr />
            <Formik
              initialValues={{
                name: "",
                modelNumber: "",
                manufacturerName: "",
                hwSpecification: "",
                supportNotes: "",
                swSpecification: "",
                version: ""
              }}
              onSubmit={values => {
                createDevice({ variables: values });
              }}
            >
              <Form>
                <h5>Basic Details</h5>
                <Row className="form-group">
                  <Col>
                    <Label>Product Name</Label>
                    <Field type="text" name="name" className="form-control" />
                  </Col>
                  <Col>
                    <Label>Manufacture</Label>
                    <Field
                      type="text"
                      name="manufacturerName"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label>Version</Label>
                    <Field
                      type="text"
                      name="version"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <Label>Serial Number</Label>
                    <Field
                      type="text"
                      name="modelNumber"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <hr />
                <h5>Links</h5>
                <Row>
                  <Col>
                    <Label>Links (Separate Link With comma's)</Label>

                    <Field
                      component={"textarea"}
                      name="supportNotes"
                      className="form-control"
                      placeholder="http://www.example.com, http://www.example2.com"
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
                <hr />
                <h5>Reuse Methods</h5>
                <Row>
                  <Col>
                    <Label>
                      Methods in which the item can be reused in points
                    </Label>
                    <Field
                      component={"textarea"}
                      name="reuseMethod"
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
