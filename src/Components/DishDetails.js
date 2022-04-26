import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmitForm(values) {
    this.toggleModal();
    alert("Successfully submitted " + JSON.stringify(values));
    this.props.addcomment(
      this.props.dishId,
      values.rating,
      values.name,
      values.feedback
    );
  }

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal} color="dark">
          <span className="fa fa-solid fa-comment" />
          CLICK HERE TO COMMENT
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            YOUR FEEDBACK PLEASE..
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmitForm(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>
                  Rating
                </Label>
                <Col md={{ size: 3, offset: 2 }}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="name" md={5}>
                  Your Name
                </Label>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>
                  Comment
                </Label>
                <Control.textarea
                  model=".feedback"
                  id="feedback"
                  name="feedback"
                  rows="6"
                  className="form-control"
                  placeholder="Your comments please"
                />
              </Row>
              <Button type="submit" value="submit" color="dark">
                SUBMIT
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        ;
      </>
    );
  }
}

function RenderDish({ dish }) {
  if (dish) {
    return (
      <section className="row">
        <div className="col-12 col-md-5 mt-1">
          <Card>
            <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments, addcomment, dishId }) {
  return (
    <div>
      <h4>COMMENTS:</h4>
      {comments != null ? (
        comments.map((demo) => {
          return (
            <div key={demo.id}>
              <h6>{demo.comment}</h6>
              <h6>
                -- {demo.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(demo.date)))}
              </h6>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
      <div className="container">
        <CommentForm 
        dishId = {dishId} 
        addcomment= {addcomment}
        />
      </div>
    </div>
  );
}

const DishDetails = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments}
          addcomment={props.addcomment}
          dishId={props.dish.id} />
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
