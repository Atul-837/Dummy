import React, { Component } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import { DISHES } from "../shared/dishes";
import {PROMOTIONS} from "../shared/Promotions"
import {LEADERS} from "../shared/Leaders"
import {COMMENTS} from "../shared/Comments"

import DishDetails from "./DishDetails";
import Header from "./Header";
import Footer from "./Footer";
import {Switch, Route, Redirect} from "react-router-dom"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null,
    };
  }
  
  render() {
    const HomePage = () => {
      return(
        <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion = {this.state.promotions.filter((promotion) => promotion.featured)[0]}
        leader = {this.state.leaders.filter((leader) => leader.featured)[0]}/>
      )
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes = {this.state.dishes}/>} />
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>

        </Switch>
        <Footer />
      </div>

    );
  }
}

export default Main;
