import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Label, Container } from "reactstrap";
import Button from "reactstrap/lib/Button";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class Add_Product extends Component {
  render() {
    return (
      <div>
        <Container className="pt-5 pb-5">
          <h1>
            <b>Add Product</b>
          </h1>
          <hr />
          <Formik
            initialValues={{ sw_spec: "hello" }}
            onSubmit={values => console.log(values)}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => {
              return (
                <Form>
                  <h5>Basic Details</h5>
                  <Row className="form-group">
                    <Col>
                      <Label>Product Name</Label>
                      <Field
                        type="text"
                        name="product_name"
                        className="form-control"
                      />
                    </Col>
                    <Col>
                      <Label>Manufacture</Label>
                      <Field
                        type="text"
                        name="manufacture"
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
                      <Field type="text" name="slno" className="form-control" />
                    </Col>
                  </Row>
                  <hr />
                  <h5>Links</h5>
                  <Row>
                    <Col>
                      <Label>Links (Separate Link With comma's)</Label>

                      <Field
                        component={"textarea"}
                        name="name"
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
                      <CKEditor
                        // id="sw_spec"
                        editor={ClassicEditor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data={values.sw_spec}
                      />
                      <Field
                        component={"textarea"}
                        name="softspecs"
                        className="form-control"
                        placeholder=""
                      />
                    </Col>
                    <Col>
                      <Label>Hardware Specifications</Label>
                      <Field
                        component={"textarea"}
                        name="hardspecs"
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
                        name="reusemethods"
                        className="form-control"
                        placeholder=""
                      />
                    </Col>
                  </Row>
                  <Row className="pt-5 pb-5">
                    <Col>
                      <Button color="primary" outline>
                        Save Product
                      </Button>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          />
        </Container>
      </div>
    );
  }
}
