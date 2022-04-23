import React, { Component } from "react";
import {
  CardImgOverlay,
  CardTitle,
  Card,
  CardImg,
  CardText,
  CardBody,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComment() {
    const review = this.props.dish.comments;
    return (
      <div>
        <h4>COMMENTS:</h4>
        {review != null ? (
          review.map((demo) => {
            return (
              <div key={demo.id}>
                <h6>{demo.comment}</h6>
                <h6>
                  -- {demo.author}, {demo.date}
                </h6>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <section className="row">
          <div className="col-12 col-md-5 mt-1">
            <Card>
              <CardImg
                width="100%"
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 mt-1">{this.renderComment()}</div>
        </section>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
