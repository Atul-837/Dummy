import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const {name, value, type, checked} = event.target
    this.setState({
      [name]: type === 'checkbox' ? checked : value 
  })
  }

  handleSubmit(event) {
    console.log("Successfully submitted " + JSON.stringify(this.state));
    alert("Form has been submitted");
    event.preventDefault();
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="Your First Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Your Last Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phone" md={2}>
                  Phone Number
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={this.state.phone}
                    placeholder="Phone Number"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Email Address"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    />
                    <Label htmlFor="agree">
                      <b>MAY WE CONTACT YOU</b>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 2 }}>
                  <Input
                    type="select"
                    id="contactType"
                    name="contactType"
                    checked={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Phone</option>
                    <option>E-Mail</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  FEEDBACK
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="8"
                    value={this.state.message}
                    placeholder="Any feedback...."
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 7, offset: 2 }}>
                  <Button type="submit" color="dark">
                    SEND FEEDBACK
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
