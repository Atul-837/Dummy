import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Successfully submitted " + JSON.stringify(values));
    alert("Form has been submitted");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">HOME</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>CONTACT US</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>CONTACT US</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>SEND US YOUR FEEDBACK</h3>
          </div>
          <div className="col-12 col-md-9">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="Your First Name"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Your Last Name"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phone" md={2}>
                  Phone Number
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phone"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Control.checkbox
                      model=".agree"
                      id="agree"
                      name="agree"
                      className="form-check-input"
                    />
                    <Label htmlFor="agree">
                      <b>MAY WE CONTACT YOU</b>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 2 }}>
                  <Control.select
                    model=".contactType"
                    id="contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Phone</option>
                    <option>E-Mail</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  FEEDBACK
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="8"
                    className="form-control"
                    placeholder="Any feedback...."
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 7, offset: 2 }}>
                  <Button type="submit" color="dark">
                    SEND FEEDBACK
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
