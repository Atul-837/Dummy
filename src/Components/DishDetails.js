import React from "react";
import {
  CardImgOverlay,
  CardTitle,
  Card,
  CardImg,
  CardText,
  CardBody,
} from "reactstrap";



  function RenderComment(props) {
    const review = props.dish.comments;
    return (
      <div>
        <h4>COMMENTS:</h4>
        {review != null ? (
          review.map((demo) => {
            return (
              <div key={demo.id}>
                <h6>{demo.comment}</h6>
                <h6>
                  -- {demo.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(demo.date)))}
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

  function Render(props) {
    if (props.dish != null) {
      return (
        <section className="row">
          <div className="col-12 col-md-5 mt-1">
            <Card>
              <CardImg
                width="100%"
                src={props.dish.image}
                alt={props.dish.name}
              />
              <CardBody>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 mt-1"><RenderComment dish = {props.dish}/></div>
        </section>
      );
    } else {
      return <div></div>;
    }
  }


export default Render;
