import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Label, Container, UncontrolledAlert } from "reactstrap";
import Button from "reactstrap/lib/Button";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import classNames from "classnames";
import Dropzone from "react-dropzone";

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
  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
  };

  render() {
    return (
      <Mutation
        onCompleted={() => {
          this.setState({});
        }}
        mutation={ADD_COMPONENT}
      >
        {(createComponent, { data, error }) => (
          <Container className="pt-5 pb-5">
            {/* {error && (
              <UncontrolledAlert color="danger">
                <div className="text-center">
                  <strong>Try Again</strong>
                </div>
              </UncontrolledAlert>
            )}
            {data && (
              <UncontrolledAlert color="success">
                <div className="text-center">
                  <strong>Data Added</strong>
                </div>
              </UncontrolledAlert>
            )} */}
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
                <hr />
                <h3>Add Images Here</h3>
                <Row>
                  <Col>
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
                                Try dropping some files here, or click to select
                                files to upload.
                              </p>
                            )}
                          </div>
                        );
                      }}
                    </Dropzone>
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
