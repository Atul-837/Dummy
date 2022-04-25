import React from "react";
import { CardImgOverlay, CardTitle, Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from "react-router-dom"
  function RenderMenu(props){
    return (
      <Card >
        <Link to={`/menu/${props.dish.id}`}>
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
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
        <div className="row">
          <Breadcrumb>
          <BreadcrumbItem><Link to="/home">HOME</Link></BreadcrumbItem>
          <BreadcrumbItem active>MENU</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>MENU</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
    
    
    }
export default Menu
