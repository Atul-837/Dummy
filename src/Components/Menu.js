import React from "react";
import { CardImgOverlay, CardTitle, Card, CardImg, CardText, CardBody } from "reactstrap";

  function RenderMenu(props){
    return (
      <Card onClick={() => props.onClick(props.dish.id)}>
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    )
  }
    const Menu = (props) => {
      const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 mt-1">
         <RenderMenu dish = {dish} onClick = {props.onClick}/>
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row">{menu}</div>
      </div>
    );
    
    
    }
export default Menu
