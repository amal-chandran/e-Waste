import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { FormGroup, Row, Col, Button, Container } from "reactstrap";
import Label from "reactstrap/lib/Label";
import ButtonGroup from "reactstrap/lib/ButtonGroup";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADDRESS = gql`
  mutation createAddressOne(
    $name: String!
    $phoneNumber: String!
    $pincode: String!
    $locality: String!
    $address: String!
    $addressType: String!
    $cityDistrictTown: String!
    $state: String!
    $landmark: String!
  ) {
    createAddressOne(
      name: $name
      phoneNumber: $phoneNumber
      pincode: $pincode
      locality: $locality
      address: $address
      addressType: $addressType
      cityDistrictTown: $cityDistrictTown
      state: $state
      landmark: $landmark
    ) {
      addressOne {
        id
      }
    }
  }
`;

export default class AddressForm extends Component {
  onSubmit = data => {
    // here you hanlde the data to be submited
  };

  render() {
    return (
      <Mutation
        onCompleted={() => {
          this.setState({});
        }}
        mutation={ADDRESS}
      >
        {(createAddressOne, { data }) => (
          <Formik
            initialValues={{
              name: "",
              phoneNumber: "",
              pincode: "",
              locality: "",
              address: "",
              addressType: "",
              cityDistrictTown: "",
              state: "",
              landmark: ""
            }}
            onSubmit={values => {
              createAddressOne({ variables: values });
            }}
          >
            <Container>
              <h2>Address</h2>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="">Username</Label>
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder=""
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>10-digit Mobile Number</Label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="">Pincode</Label>
                      <Field
                        type="text"
                        name="pincode"
                        className="form-control"
                        placeholder=""
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Locality</Label>
                      <Field
                        type="text"
                        name="locality"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={9}>
                    <Label>Address (Area & Street)</Label>

                    <Field
                      type={"textarea"}
                      name="address"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Address Type</Label>
                      <Field
                        name="addressType"
                        type="text"
                        component="select"
                        placeholder="Favorite Color"
                        className="form-control"
                      >
                        <option type="text" value="Default">
                          Choose
                        </option>
                        <option type="text" value="Home">
                          Home
                        </option>
                        <option type="text" value="Work">
                          Work
                        </option>
                      </Field>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="">City/District/Town</Label>
                      <Field
                        type="text"
                        name="cityDistrictTown"
                        className="form-control"
                        placeholder=""
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>State</Label>
                      <Field
                        type="text"
                        name="state"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label htmlFor="">LandMark (Optional)</Label>
                      <Field
                        type="text"
                        name="landmark"
                        className="form-control"
                        placeholder=""
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ButtonGroup>
                      <Button type="submit" usize="lg" color="success">
                        Save
                      </Button>
                      <Button size="lg" outline color="primary">
                        Clear
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Formik>
        )}
      </Mutation>
    );
  }
}
