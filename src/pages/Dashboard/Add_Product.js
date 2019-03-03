import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Label, Container } from "reactstrap";
import Button from "reactstrap/lib/Button";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import { BASE_URL } from "./../../config";

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
    $document: Int!
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
      document: $document
    ) {
      id
    }
  }
`;

export default class Add_Product extends Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    var formData = new FormData();
    formData.append("document", acceptedFiles[0]);

    fetch(`${BASE_URL}/upload/`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => this.setState({ document: data.id }));
  };

  constructor(props) {
    super(props);
    this.state = {
      document: 0
    };
  }
  render() {
    console.log(this.state.document);
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
              <b>Add Device</b>
            </h1>
            <hr />
            <Formik
              initialValues={{
                name: "",
                reuseMethod: "",
                modelNumber: "",
                manufacturerName: "",
                hwSpecification: "",
                supportNotes: "",
                swSpecification: "",
                version: ""
              }}
              onSubmit={values => {
                values.document = this.state.document;

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
                <hr />
                <h4>Add Images Here</h4>
                <Row>
                  <Col>
                    <div>
                      <Dropzone onDrop={this.onDrop}>
                        {({ getRootProps, getInputProps, isDragActive }) => {
                          return (
                            <div
                              {...getRootProps()}
                              className={classNames("dropzone", {
                                "dropzone--isActive": isDragActive
                              })}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop files here...</p>
                              ) : (
                                <p>
                                  Try dropping some files here, or click to
                                  select files to upload.
                                </p>
                              )}
                            </div>
                          );
                        }}
                      </Dropzone>
                    </div>
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
