import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <section className="row">
        <div className="col-12 col-md-5 mt-1">
          <Card>
            <CardImg
              width="100%"
              src=  {dish.image}
              alt={dish.name}
            />
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

function RenderComments({ comments }) {
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
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
